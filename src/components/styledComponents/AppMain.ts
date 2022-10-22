import { styled } from '@mui/material';

export const AppMain = styled('div')(({ theme }) => ({
    display: 'flex',
    width: '100%',
    minHeight: '100vh',
    background: theme.palette.background.default
}));