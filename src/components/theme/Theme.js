import { createTheme } from "@mui/material/styles"


const theme = createTheme({
    palette: {
        primary: {
            main: '#003566'
        },
        secondary: {
            main: '#FFD60A'
        },
        neutral: {
            main: '#ebebeb',
            dark: '#001D3D',
            contrastText: '#ebebeb'
        }
    }
})

export default theme