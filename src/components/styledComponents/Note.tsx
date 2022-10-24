import { FC, useContext } from 'react';
import { AppContext } from '../../context/context';
import { INote } from '../../types/INote';
import { Content, Header, MainNoteBody, NoteBody, Text, Time } from './NoteElements';

interface NoteParams {
    note: INote,
    chosen?: boolean,
}

export const SideBarNote: FC<NoteParams> = ({note, chosen = false}) => {
    const context = useContext(AppContext);
    const currentTime = note.time.toLocaleTimeString();
    const currentDate = note.time.toLocaleDateString();

    const func = (e: React.MouseEvent<HTMLElement>) => {
        if (context?.currentNote.id !== note.id) {
            context?.setCurrentNote({header: note.header, text: note.text, time: note.time})
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
    const currentTime = note.time.toLocaleTimeString();
    const currentDate = note.time.toLocaleDateString();

    return (
        <MainNoteBody>
            <Time>{note.time.getDate() === new Date().getDate() ? currentTime : currentDate}</Time>
            <Header>{note.header}</Header>
            <Content>
                <Text>{note.text}</Text>
            </Content>
        </MainNoteBody>
    )
}