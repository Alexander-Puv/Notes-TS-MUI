import DeleteIcon from '@mui/icons-material/Delete';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import Save from '@mui/icons-material/Save';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useColorScheme } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/context';
import { db } from '../../data/db';
import { useRemoveTags } from '../../hooks/useRemoveTags';
import { BtnsContainer } from '../styledComponents/BtnsContainer';

export const MainBtns = () => {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState(['', false, '']);
    const { mode, setMode } = useColorScheme();
    const context = useContext(AppContext);
    const header = context ? context.currentNote.header : '';
    const text = useRemoveTags(context?.currentNote.text);

    useEffect(() => {
        status[0] &&
        setTimeout(async () => {
            setStatus(['', false, '']);
        }, 5000)
    }, [status])

    async function addNote() {
        if (header || text) {
            try {
                if (context?.currentNote.id === 'def') {
                    const id = await db.notes.add({
                        header,
                        text,
                        time: new Date(),
                    });
                    context.setCurrentNote({
                        header,
                        text,
                        time: new Date(),
                        id: id.toString()
                    })

                    setStatus([`Note ${header} successfully updated`, true, 'saveNote']);
                } else {
                    await db.notes.where({id: context?.currentNote.id}).modify(n => {n.header = header; n.text = text; n.time = new Date()})
                    setStatus([`Note ${header} successfully changed`, true, 'saveNote']);
                }
            } catch (error) {
                setStatus([`Failed to add ${header}: ${error}`, false, 'saveNote']);
            }
        } else {
            setStatus([`You have to write header or text first`, false, 'saveNote']);
        }
    }
  
    const handleClose = () => {
        setOpen(false);
    };

    const deleteNote = async () => {
        try {
            if (context?.currentNote.id !== 'def') {
                await db.notes.where({id: context?.currentNote.id}).delete()
                context?.setCurrentNote({...context?.defaultNote})
                setStatus([`Note ${header} successfully deleted`, true, 'deleteNote']);
            } else {
                setStatus([`You can't delete default note`, false, 'deleteNote']);
            }
        } catch (error) {
            setStatus([`Failed to add ${header}: ${error}`, false, 'deleteNote']);
        }
        setOpen(false);
    };

    return (
        <BtnsContainer>
            <Button>
                <DeleteIcon className='delete' onClick={() => setOpen(true)} />
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        Do you want to delete this note?
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque commodi sit, natus ipsam voluptates cumque consectetur illo voluptatem quidem quas quo ullam animi doloremque temporibus impedit, ipsa ex reprehenderit deserunt?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={deleteNote}
                            sx={(theme) => ({
                                color: theme.palette.error.main,
                                '&:hover': {
                                    background: `${theme.palette.error.main}20`
                                }
                            })}
                        >
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
            </Button>
            <Button onClick={addNote}>
                <Save />
            </Button>
            <Button onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
                {mode === 'dark' ? <LightModeIcon className='light' /> : <NightsStayIcon className='night' />}
            </Button>
            {status[0] && <span className={`status ${status[1]} ${status[2]}`}>{status[0]}</span>}
        </BtnsContainer>
    )
}
