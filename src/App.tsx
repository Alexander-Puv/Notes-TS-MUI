import { deepmerge } from '@mui/utils';
import { Experimental_CssVarsProvider as CssVarsProvider,
    experimental_extendTheme as extendMuiTheme } from '@mui/material/styles';
import React from 'react';
import './styles/App.css';
import { Main } from './components/Main';
import SideBar from './components/SideBar';
import { AppMain } from './components/styledComponents/AppMain';
import { AppTheme } from './styles/AppTheme';

function App() {
    const theme = deepmerge(extendMuiTheme(), AppTheme);
    
    return (
        <CssVarsProvider theme={theme} >
            <AppMain>
                <SideBar />
                <Main />
            </AppMain>
        </CssVarsProvider >
    );
}

export default App;
