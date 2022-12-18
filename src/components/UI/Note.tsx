import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/context';
import { useRemoveTags } from '../../hooks/useRemoveTags';
import { NoteActionTypes } from '../../reducer/reducerTypes';
import { INote } from '../../types/INote';
import { Content, Header, HeaderInput, MainNoteBody, NoteBody, Text, Time } from '../styledComponents/NoteElements';
import { TextEditor } from './TextEditor';

interface NoteParams {
    note: INote,
}

export const SideBarNote = ({note}: NoteParams) => {
    const context = useContext(AppContext);
    const currentTime = note.time.toLocaleTimeString().slice(0, -3);
    const currentDate = note.time.toLocaleDateString();
    const text = useRemoveTags(note.text);
    const [className, setClassName] = useState(context?.state.note?.id?.toString() === note.id?.toString() ? 'chosen' : '')

    useEffect(() => {
        setClassName(context?.state.note?.id?.toString() === note.id?.toString() ? 'chosen' : '')
    }, [context?.state.note?.id])

    const selectNote = () => {
        if (context?.state.note.id !== note.id) {
            context?.dispatch({type: NoteActionTypes.SET_NOTE, payload: note})
        }
    }

    return (
        <NoteBody className={className} onClick={selectNote}>
            <Header>{note.header ? note.header : 'New note'}</Header>
            <Content>
                <Time>{note.time.getDate() === new Date().getDate() ? currentTime : currentDate}</Time>
                <Text>{text ? text : 'No additional text'}</Text>
            </Content>
        </NoteBody>
    )
}

export const MainNote = () => {
    const context = useContext(AppContext);
    const [header, setHeader] = useState(context?.state.note.header ?? '');
    const [text, setText] = useState(context?.state.note.text ?? '');
    const currentTime = context?.state.note.time.toLocaleDateString('default', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' });
    
    useEffect(() => {
        setHeader(context?.state.note.header ?? '')
        setText(context?.state.note.text ?? '')
    }, [context?.state.note?.id])

    useEffect(() => {
        context?.dispatch({type: NoteActionTypes.SET_NOTE, payload: {...context?.state.note, header, text}})
    }, [header, text])
    
    const onHeaderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHeader(e.target.value);
    }

    return (
        <MainNoteBody>
            <Time>{currentTime}</Time>
            <HeaderInput placeholder='New note' value={header} onChange={onHeaderChange} />
            <TextEditor text={text} setText={setText}/>
        </MainNoteBody>
    )
}