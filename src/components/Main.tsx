import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { Button } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';
import { FC, useContext } from 'react';
import { AppContext } from '../context/context';
import { INote } from '../types/INote';
import { MainNote } from './styledComponents/Note';

interface MainProps {
    defaultNote: INote
}

export const Main: FC<MainProps> = ({defaultNote}) => {
    const { mode, setMode } = useColorScheme();
    const context = useContext(AppContext);

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
