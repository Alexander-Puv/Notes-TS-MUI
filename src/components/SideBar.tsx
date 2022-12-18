import { TextField } from '@mui/material';
import React, { FC, useMemo, useState } from 'react';
import { INote } from '../types/INote';
import { Search } from './styledComponents/Search';
import { SideBarNote } from './UI/Note';
import MenuIcon from '@mui/icons-material/Menu';
import { SSideBar } from './styledComponents/SSideBar';
import { defaultNote } from '../utils/defaultNote';

interface SideBarProps {
    notes?: INote[]
}

export const SideBar = ({notes}: SideBarProps) => {
    const [searchVal, setSearchVal] = useState('');
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const onSearchFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchVal(e.target.value);
    }

    const searcehdNotes = useMemo(() => {
        return notes?.filter(note => note.header.includes(searchVal))
    }, [searchVal, notes])

    return (
        <SSideBar className={`${isOpenMenu}`}>
            <div className='sideBarTop'>
                <MenuIcon onClick={() => isOpenMenu ? setIsOpenMenu(false) : setIsOpenMenu(true)} />
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
            </div>
            <div className='notesContainer'>
                <SideBarNote note={defaultNote}/>
                {searcehdNotes && searcehdNotes.map(note => 
                    <SideBarNote note={{header: note.header, text: note.text, time: note.time, id: note.id}} key={note.id}/>
                )}
            </div>
        </SSideBar>
    )
}
