import { styled } from '@mui/material';

export const SSideBar = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 300,
    width: '100%',
    transition: `${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
    '.sideBarTop': {
        display: 'flex',
        padding: 10,
        'svg': {
            fontSize: 0,
            alignSelf: 'center',
            color: theme.typography.body1.color,
            transition: `${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
        },
    },
    '.notesContainer': {
        transition: `${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeOut}`
    },
    '@media (max-width: 850px)': {
        position: 'absolute',
        width: 'auto',
        '&.false .notesContainer': {
            position: 'absolute',
            top: 60,
            transform: `translateX(-100%)`,
        },
        '&.false .sideBarTop': {
            padding: 5,
            'div': {
                position: 'absolute',
                transform: `translateX(-200%)`,
            }
        },
        'svg': {
            fontSize: `${theme.typography.h2.fontSize} !important`,
        },
        '&.true': {
            height: '100vh',
            width: '100vw',
            maxWidth: '100vw',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 100000,
        },
    }
}))