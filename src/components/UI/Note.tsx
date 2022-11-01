import React, { FC, useContext, useMemo, useState } from 'react';
import { AppContext } from '../../context/context';
import { INote } from '../../types/INote';
import { Content, Header, HeaderInput, MainNoteBody, NoteBody, Text, Time } from '../styledComponents/NoteElements';
import { TextEditor } from './TextEditor';

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
            <Header>{note.header ? note.header : 'New note'}</Header>
            <Content>
                <Time>{note.time.getDate() === new Date().getDate() ? currentTime : currentDate}</Time>
                <Text>{note.text ? note.text : 'No additional text'}</Text>
            </Content>
        </NoteBody>
    )
}

export const MainNote: FC<NoteParams> = ({note}) => {
    const [header, setHeader] = useState(note.header);
    const [text, setText] = useState(note.text);
    const context = useContext(AppContext);
    const currentTime = note.time.toLocaleDateString('default', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' });

    const co = useMemo(() => {
        if (header || text) {
            context?.setCurrentNote({header: header, text: text, time: new Date()})
            console.log(true);
        }
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