import SearchIcon from '@mui/icons-material/Search';
import { Button, TextField } from '@mui/material';
import React, { FC, useState } from 'react';
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

    const onSearch = (e: React.MouseEvent<HTMLElement>) => {

    }
    
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
                <Button variant={'contained'} onClick={onSearch}><SearchIcon /></Button>
            </Search>
            <SideBarNote note={props.defaultNote}/>
            {props.notes && props.notes.map(note => 
                <SideBarNote note={{header: note.header, text: note.text, time: note.time, id: note.id}} key={note.id}/>
            )}
        </div>
    )
}
