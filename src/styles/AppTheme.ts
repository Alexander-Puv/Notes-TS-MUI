import { extendTheme } from '@mui/joy/styles';

export const AppTheme = extendTheme({
    cssVarPrefix: 'mui',
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    solidBg: '#e2e1e0'
                }
            }
        },
        dark: {
            palette: {
                background: {
                    body: '#e2e1e0'
                }
            }
        }
    }
})