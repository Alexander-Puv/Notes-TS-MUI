import { styled } from '@mui/material';

export const Search = styled('div')(({ theme }) => ({
    margin: 10,
    display: 'flex',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[8],
    '.SearchField': {
        width: '100%',
        '*': {
            borderRadius: `${theme.shape.borderRadius}px 0 0 ${theme.shape.borderRadius}px`,
        },
        'fieldset': {
            borderColor: `var(--mui-palette-primary-main) !important`,
        }
    },
    'button': {
        borderRadius: `0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`,
        alignSelf: 'right',
        '&, &:hover': {
            boxShadow: 'none',
            background: theme.palette.primary.main
        }
    },
}));