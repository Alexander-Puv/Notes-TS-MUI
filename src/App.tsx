import {
    Experimental_CssVarsProvider as CssVarsProvider,
    experimental_extendTheme as extendMuiTheme
} from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import React, { useReducer } from 'react';
import { Main } from './components/Main';
import { SideBar } from './components/SideBar';
import { AppMain } from './components/styledComponents/AppMain';
import { AppContext } from './context/context';
import { useDexie } from './hooks/useDexie';
import { NoteReducer, initialReducerState } from './reducer/reducer';
import './styles/App.css';
import { AppTheme } from './styles/AppTheme';

function App() {
    const theme = deepmerge(extendMuiTheme(), AppTheme);
    const [state, dispatch] = useReducer(NoteReducer, initialReducerState)
    const notes = useDexie();
    
    return (
        <AppContext.Provider value={{
            state, dispatch
        }}>
        <CssVarsProvider theme={theme}>
            <AppMain>
                <SideBar notes={notes ? notes : undefined} />
                <Main />
            </AppMain>
        </CssVarsProvider >
        </AppContext.Provider>
    );
}

export default App;
