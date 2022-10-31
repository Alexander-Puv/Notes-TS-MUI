import {
    Experimental_CssVarsProvider as CssVarsProvider,
    experimental_extendTheme as extendMuiTheme
} from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import { useState } from 'react';
import { Main } from './components/Main';
import SideBar from './components/SideBar';
import { AppMain } from './components/styledComponents/AppMain';
import { useDexie } from './hooks/NoteList';
import { AppContext } from './context/context';
import './styles/App.css';
import { AppTheme } from './styles/AppTheme';
import { INote } from './types/INote';

function App() {
    const theme = deepmerge(extendMuiTheme(), AppTheme);
    const defaultNote: INote = {header: 'New note', text: 'No additioanal text', time: new Date(), id: 'def'};
    const [currentNote, setCurrentNote] = useState(defaultNote);
    const notes = useDexie();
    
    return (
        <AppContext.Provider value={{
            currentNote, setCurrentNote
        }}>
        <CssVarsProvider theme={theme} >
            <AppMain>
                <SideBar defaultNote={defaultNote} notes={notes ? notes : undefined} />
                <Main defaultNote={defaultNote} />
            </AppMain>
        </CssVarsProvider >
        </AppContext.Provider>
    );
}

export default App;
