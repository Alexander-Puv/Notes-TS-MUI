import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { Button } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';
import { FC } from 'react';

export const Main: FC = () => {
    const { mode, setMode } = useColorScheme();

    return (
        <div className='main'>
            <Button onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
                {mode === 'dark' ? <LightModeIcon /> : <NightsStayIcon />}
            </Button>
        </div>
    )
}
