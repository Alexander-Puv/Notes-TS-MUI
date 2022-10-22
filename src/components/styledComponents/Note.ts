import { styled } from '@mui/material';

export const Note = styled('div')(({ theme }) => ({
    display: 'flex',
    width: '100%',
    background: theme.palette.primary.main
}));