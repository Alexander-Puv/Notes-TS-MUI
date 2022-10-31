import { styled } from '@mui/material';

export const EditorContainer = styled('div')(({ theme }) => ({
    '.ql-toolbar': {
        position: 'fixed',
        top: 'calc(100vh - 63px)',
        marginRight: '10px',
        width: '-webkit-fill-available',
        border: 0,
        'div:first-of-type': {
            justifyContent: 'center',
        },
        'button': {
            '*': {
                transition: `${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
            },
            '&.ql-active *': {
                color: theme.palette.primary.dark + ' !important',
            },
            '&:hover *': {
                color: theme.palette.primary.dark + ' !important',
            }
        },
    },
    '.ql-editor': {
        padding: 0,
    },
    'h1': {
        fontSize: theme.typography.h4.fontSize,
        fontWeight: theme.typography.h3.fontWeight,
    },
    'h2': {
        fontSize: theme.typography.h5.fontSize,
        fontWeight: theme.typography.h3.fontWeight,
    },
    'h3': {
        fontSize: theme.typography.h6.fontSize,
        fontWeight: theme.typography.h3.fontWeight,
    },
    'p, li': {
        fontSize: theme.typography.htmlFontSize,
    },
    'a, a *': {
        color: theme.palette.primary.dark + ' !important'
    },
}))