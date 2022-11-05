import { styled } from '@mui/material';

export const EditorContainer = styled('div')(({ theme }) => ({
    '.toolsAreFine': {
        height: 63,
        '@media (max-width: 510px)': {
            height: 98,
        },
    },
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
        '@media (max-width: 510px)': {
            top: 'calc(100vh - 98px)',
        },
    },
    '.ql-editor': {
        padding: 0,
    },
    '.ql-blank::before': {
        left: 0,
        right: 0,
        color: theme.palette.grey[400],
        fontSize: theme.typography.htmlFontSize,
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