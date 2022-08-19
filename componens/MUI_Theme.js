import { createTheme } from "@mui/material/styles";

export const dark_theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#000000',
            paper: '#201e1e',
        }
    },
});

export const light_theme = createTheme({
    palette: {
        mode: 'light',
    },
});
