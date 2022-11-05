import { styled } from '@mui/material';

export const NoteBody = styled('div')(({ theme }) => ({
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundImage: 'none',
    color: theme.typography.body1.color,
    fontFamily: theme.typography.h1.fontFamily,
    '&.chosen': {
        backgroundImage: 'var(--mui-overlays-1)',
    },
    'h1': {
        height: 24,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    'p': {
        height: 21,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }
}))

export const MainNoteBody = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    backgroundImage: 'none',
    '*': {
        color: theme.typography.body1.color,
        background: theme.palette.background.default + ' !important',
        fontFamily: theme.typography.h1.fontFamily,
    },
    'span': {
        textAlign: 'center'
    },
    'h1': {
        margin: '10px 0 15px',
        fontSize: theme.typography.h4.fontSize,
    },
}))

export const Header = styled('h1')(({ theme }) => ({
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.h3.fontWeight,
    marginBottom: 5,
    outline: 'none'
}))

export const HeaderInput = styled('input')(({ theme }) => ({
    width: '100%',
    fontSize: theme.typography.h2.fontSize + ' !important',
    fontWeight: theme.typography.h3.fontWeight,
    marginBottom: 5,
    outline: 'none',
    border: 0,
}))

export const Content = styled('div')(() => ({
    display: 'flex',
    gap: 10
}))

export const Time = styled('span')(() => ({}))
export const Text = styled('p')(() => ({}))