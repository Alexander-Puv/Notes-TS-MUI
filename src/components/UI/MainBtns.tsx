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
    const [status, setStatus] = useState(['', false]);
    const { mode, setMode } = useColorScheme();
    const context = useContext(AppContext);
    const header = context ? context.currentNote.header : '';
    const text = useRemoveTags(context?.currentNote.text);

    useEffect(() => {
        status[0] &&
        setTimeout(async () => {
            setStatus(['', false]);
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
                    console.log(db.notes);
                    

                    setStatus([`Note ${header} successfully updated`, true]);
                } else {
                    await db.notes.where({id: context?.currentNote.id}).modify(n => {n.header = header; n.text = text})
                    setStatus([`Note ${header} successfully changed`, true]);
                }
            } catch (error) {
                setStatus([`Failed to add ${header}: ${error}`, false]);
            }
        } else {
            setStatus([`You have to write header or text first`, false]);
        }
    }
  
    const handleClose = () => {
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
                        <Button onClick={handleClose}
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
                {status[0] && <span className={`status ${status[1]}`}>{status}</span>}
            <Button onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
                {mode === 'dark' ? <LightModeIcon className='light' /> : <NightsStayIcon className='night' />}
            </Button>
        </BtnsContainer>
    )
}
