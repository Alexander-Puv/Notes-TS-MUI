import { styled } from '@mui/material';

export const SMain = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    flexGrow: 1,
    transition: `${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
}))