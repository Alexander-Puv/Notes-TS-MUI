import { styled } from '@mui/material';

export const EditorContainer = styled('div')(({ theme }) => ({
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
    'a': {
        color: theme.palette.primary.dark + ' !important'
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
}))