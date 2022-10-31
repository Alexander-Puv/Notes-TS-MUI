import { styled } from '@mui/material';

export const BtnsContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    position: 'absolute',
    top: 10,
    right: 10,
    'button': {
        minWidth: 'auto',
        '.delete': {
            color: theme.palette.error.main,
        },
    },
}))