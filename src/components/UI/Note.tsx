import React, { FC, useContext, useState } from 'react';
import { AppContext } from '../../context/context';
import { INote } from '../../types/INote';
import { TextEditor } from './TextEditor';
import { Content, Header, HeaderInput, MainNoteBody, NoteBody, Text, Time } from '../styledComponents/NoteElements';

interface NoteParams {
    note: INote,
    chosen?: boolean,
}

export const SideBarNote: FC<NoteParams> = ({note, chosen = false}) => {
    const context = useContext(AppContext);
    const currentTime = note.time.toLocaleTimeString().slice(0, -3);
    const currentDate = note.time.toLocaleDateString();

    const func = (e: React.MouseEvent<HTMLElement>) => {
        if (context?.currentNote.id !== note.id) {
            context?.setCurrentNote({header: note.header, text: note.text, time: note.time, id: note.id});
        }
    }

    return (
        <NoteBody className={chosen ? 'chosen' : ''} onClick={func}>
            <Header>{note.header}</Header>
            <Content>
                <Time>{note.time.getDate() === new Date().getDate() ? currentTime : currentDate}</Time>
                <Text>{note.text}</Text>
            </Content>
        </NoteBody>
    )
}

export const MainNote: FC<NoteParams> = ({note}) => {
    const [header, setHeader] = useState(note.id === 'def' ? '' : note.header)
    const context = useContext(AppContext);
    const currentTime = note.time.toLocaleDateString('default', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' });
    
    /* setTimeout(() => {
        if (header !== note.header || text !== note.text) {
            context?.setCurrentNote({header: header, text: text, time: new Date()})
            console.log(context);
        }
    }, 5000) */

    return (
        <MainNoteBody>
            <Time>{currentTime}</Time>
            <HeaderInput placeholder='New note' value={header} onChange={e => setHeader(e.target.value)} />
            <TextEditor />
        </MainNoteBody>
    )
}