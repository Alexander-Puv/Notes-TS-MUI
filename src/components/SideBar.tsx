import { TextField } from '@mui/material';
import React, { FC, useMemo, useState } from 'react';
import { INote } from '../types/INote';
import { Search } from './styledComponents/Search';
import { SideBarNote } from './UI/Note';

interface SideBarProps {
    defaultNote: INote,
    notes?: INote[]
}

export const SideBar: FC<SideBarProps> = (props) => {
    const [searchVal, setSearchVal] = useState('');

    const onSearchFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchVal(e.target.value);
    }

    const searcehdNotes = useMemo(() => {
        return props.notes?.filter(note => note.header.includes(searchVal))
    }, [searchVal, props.notes])

    return (
        <div className='sideBar'>
            <Search>
                <TextField
                    label="Search"
                    type="search"
                    value={searchVal}
                    onChange={onSearchFieldChange}
                    size={'small'}
                    className='SearchField'
                />
            </Search>
            <SideBarNote note={props.defaultNote}/>
            {searcehdNotes && searcehdNotes.map(note => 
                <SideBarNote note={{header: note.header, text: note.text, time: note.time, id: note.id}} key={note.id}/>
            )}
        </div>
    )
}
