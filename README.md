# set up nextjs, recoil, MUI, tailwindcss, websocket

## Create nextjs app

```bash
npx create-next-app appname
```

## Setup recoil

```bash
npm install recoil
```

wrap react component tree with:
```js
<RecoilRoot>
</RecoilRoot>
```

## Setup MUI

```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
```

### add font and font-icon

`./pages/_document.js`:
```js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
```

### add Theme and CssBaseLine

add theme flag as a recoil atom:
```js
export const darkTheme = atom(
    {
        key: 'darkTheme',
        default: true
    }
)
```

add dark/light theme: `./components/MUI_theme.js`
```js
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
```

wrap react component tree with:
```js
<ThemeProvider theme={darkTheme ? dark_theme : light_theme}></ThemeProvider>
```

put before react component tree:
```js
<CssBaseline />
```

## Setup tailwindcss

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

add to `tailwind.config.js` content list
```js
"./components/*.{js,ts,jsx,tsx}",
"./pages/*.{js,ts,jsx,tsx}",
"./pages/**/*.{js,ts,jsx,tsx}",
"./components/**/*.{js,ts,jsx,tsx}",
```

add to `tailwind.config.js`
```js
corePlugins: {
preflight: false,
},
important: '#__next'
```

add to `styles/globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
``` 

wrap react component tree with:
```js
<StyledEngineProvider injectFirst>
</StyledEngineProvider>
```

## Setup WebSocket

add it as a recoil atom:
```js
export const wsInstance = atom({
    key: 'wsInstance',
    default: ((typeof window) !== "undefined") ? new WebSocket("ws://127.0.0.1:7080") : null
}
)
```

add the onmassage callback in a `useEffect`
```js
const ws = useRecoilValue(wsInstance)
useEffect(() => {
ws.onmessage = (event) => {
    console.log(event.data)
}
});
```
