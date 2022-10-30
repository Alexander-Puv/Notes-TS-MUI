import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { Button, useColorScheme } from '@mui/material';
import { FC, useContext } from 'react';
import { AppContext } from '../context/context';
import { INote } from '../types/INote';
import { MainNote } from './UI/Note';

interface MainProps {
    defaultNote: INote
}

export const Main: FC<MainProps> = ({defaultNote}) => {
    const context = useContext(AppContext);
    const { mode, setMode } = useColorScheme();

    return (
        <>
        <div className='main'>
            <MainNote note={context ? context.currentNote : defaultNote}/>
        </div>
        <Button onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')} sx={{position: 'absolute', top: 10, right: 10}}>
            {mode === 'dark' ? <LightModeIcon /> : <NightsStayIcon />}
        </Button>
        </>
    )
}
