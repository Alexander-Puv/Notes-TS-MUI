import SearchIcon from '@mui/icons-material/Search';
import { Button, TextField } from '@mui/material';
import React from 'react';
import { Note } from './styledComponents/Note';
import { Search } from './styledComponents/Search'

interface SearchState {
    searchVal: string;
}

interface SideBarProps {

}

export default class SideBar extends React.Component<SideBarProps, SearchState> {
    constructor(props: SideBarProps) {
        super(props)
        this.onSearchFieldChange = this.onSearchFieldChange.bind(this)
        this.onSearch = this.onSearch.bind(this)
        this.state = {searchVal: ''}
    }

    onSearchFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({searchVal: e.target.value})
    }

    onSearch = (e: React.MouseEvent<HTMLElement>) => {
        
    }
    
    render () {
        return (
            <div className='sideBar'>
                <Search>
                    <TextField
                        label="Search"
                        type="search"
                        value={this.state.searchVal}
                        onChange={this.onSearchFieldChange}
                        size={'small'}
                        className='SearchField'
                    />
                    <Button variant={'contained'} onClick={this.onSearch}><SearchIcon /></Button>
                </Search>
                <Note>
                    log
                </Note>
            </div>
        )
    }
}
