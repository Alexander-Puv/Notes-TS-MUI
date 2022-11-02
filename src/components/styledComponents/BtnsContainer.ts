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
    '.status': {
        position: 'absolute',
        top: 42,
        padding: 5,
        fontFamily: theme.typography.h1.fontFamily,
        color: theme.typography.body1.color,
        background: theme.palette.background.default,
        border: `1px solid ${theme.palette.error.main}`,
        wordBreak: 'break-all',
        '&::before': {
            content: '" "',
            position: 'absolute',
            top: -20,
            left: 'calc(50% - 10px)',
            border: '10px solid transparent',
            borderBottom: `10px solid ${theme.palette.error.main}`,
        },
        '&.true': {
            borderColor: theme.palette.success.main,
            '&::before': {
            borderBottomColor: theme.palette.success.main
            }
        }
    }
}))