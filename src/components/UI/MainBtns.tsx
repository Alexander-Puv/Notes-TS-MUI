import DeleteIcon from '@mui/icons-material/Delete';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import Save from '@mui/icons-material/Save';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useColorScheme } from '@mui/material';
import { useContext, useState } from 'react';
import { AppContext } from '../../context/context';
import { db } from '../../data/db';
import { BtnsContainer } from '../styledComponents/BtnsContainer';

export const MainBtns = () => {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState('');
    const { mode, setMode } = useColorScheme();
    const context = useContext(AppContext);
    const header = context ? context.currentNote.header : '';
    const text = context ? context.currentNote.text : '';
    

    async function addNote() {
        if (header || text) {
            try {
                const id = await db.notes.add({
                    header,
                    text,
                    time: new Date()
                });
        
                setStatus(`Note ${header} successfully added. Got id ${id}`);
            } catch (error) {
                setStatus(`Failed to add ${header}: ${error}`);
            }
        } else {
            setStatus(`You have to write header or text first`);
        }
    }

    /* useEffect(() => {
        context?.setCurrentNote();
    }, [header, text, time]) */
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <BtnsContainer>
            {status}
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
            <Button onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
                {mode === 'dark' ? <LightModeIcon className='light' /> : <NightsStayIcon className='night' />}
            </Button>
        </BtnsContainer>
    )
}
