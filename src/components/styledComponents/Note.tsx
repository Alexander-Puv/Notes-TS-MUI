import { Editor } from 'draft-js';
import React, { FC, useContext, useState } from 'react';
import { AppContext } from '../../context/context';
import { INote } from '../../types/INote';
import { BLOCK_RENDER_MAP } from '../Editor/EditorConfig';
import { ToolPanel } from '../Editor/ToolPanel';
import { useEditor } from '../Editor/useEditor';
import { Content, Header, HeaderInput, MainNoteBody, NoteBody, Text, Time } from './NoteElements';

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
    const {text, onChange} = useEditor()
    
    /* setTimeout(() => {
        if (header !== note.header || text !== note.text) {
            context?.setCurrentNote({header: header, text: text, time: new Date()})
            console.log(context);
        }
    }, 5000) */

    return (
        <MainNoteBody>
            <Time>{currentTime}</Time>
            <HeaderInput placeholder='Note header' value={header} onChange={e => setHeader(e.target.value)} />
            <div>
                <ToolPanel />
                <Editor placeholder='Note text' editorState={text} onChange={onChange} blockRenderMap={BLOCK_RENDER_MAP} />
            </div>
            {/* <Text/> */}
        </MainNoteBody>
    )
}