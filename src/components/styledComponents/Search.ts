import { styled } from '@mui/material';

export const Search = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: 1,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[8],
    transition: `${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeOut}`,
    '.SearchField': {
        width: '100%',
        'fieldset': {
            borderColor: `var(--mui-palette-primary-main) !important`,
        }
    },
}));