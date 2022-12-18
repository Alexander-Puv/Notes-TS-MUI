import DeleteIcon from '@mui/icons-material/Delete';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import Save from '@mui/icons-material/Save';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useColorScheme } from '@mui/material';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/context';
import { db } from '../../data/db';
import { NoteActionTypes } from '../../reducer/reducerTypes';
import { defaultNote } from '../../utils/defaultNote';
import { BtnsContainer } from '../styledComponents/BtnsContainer';

const SaveNote = 'saveNote'
const DeleteNote = 'deleteNote'

export const MainBtns = () => {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState(['', false, '']);
    const { mode, setMode } = useColorScheme();
    const context = useContext(AppContext);

    useEffect(() => {
        status[0] &&
        setTimeout(async () => {
            setStatus(['', false, '']);
        }, 5000)
    }, [status])

    const addNote = useCallback(async () => {
        const header = context ? context.state.note.header : '';
        const text = context ? context.state.note.text : '';
        if (header || text) {
            try {
                if (context?.state.note.id === 'def') {
                    const id = await db.notes.add({
                        header,
                        text,
                        time: new Date(),
                    });
                    context?.dispatch({type: NoteActionTypes.SET_NOTE, payload: {
                        header,
                        text,
                        time: new Date(),
                        id: id.toString()
                    }})

                    setStatus([`Note ${header} successfully updated`, true, SaveNote]);
                } else {
                    await db.notes.where({id: context?.state.note?.id}).modify(n => {n.header = header; n.text = text; n.time = new Date()})
                    setStatus([`Note ${header} successfully changed`, true, SaveNote]);
                }
            } catch (error) {
                setStatus([`Failed to add ${header}: ${error}`, false, SaveNote]);
            }
        } else {
            setStatus([`You have to write header or text first`, false, SaveNote]);
        }
    }, [context?.state])
  
    const handleClose = () => {
        setOpen(false);
    };

    const deleteNote = async () => {
        const header = context ? context.state.note.header : '';
        try {
            if (context?.state.note?.id !== 'def') {
                await db.notes.where({id: context?.state.note?.id}).delete()
                context?.dispatch({type: NoteActionTypes.SET_NOTE, payload: defaultNote})
                setStatus([`Note ${header} successfully deleted`, true, DeleteNote]);
            } else {
                setStatus([`You can't delete default note`, false, DeleteNote]);
            }
        } catch (error) {
            setStatus([`Failed to add ${header}: ${error}`, false, DeleteNote]);
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
