import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
    :root {
        --bg-main: #241179;
        --bg-list: #101204;
        --bg-task: #22272b;
        --bg-light: #A6C5E229;

        --color-text: #b6c2cf;
        --color-border:#388bff;
        --color-subtitle: #9FADBC;
        --border-r-big: 12px;
        --border-r-base: 7px;
        
        --fz-card-title: 20px;
        --fz-title: 18px;
        --fz-base: 16px;
        --fz-small: 14px;
    }


    @font-face {
        font-family: 'Circe Rounded';
        src: url('shared/assets/fonts/CirceRounded-Regular.woff') format("woff");
        font-weight: 400;
        font-display: swap;
        font-style: normal;
    }
    @font-face {
        font-family: 'Circe Rounded';
        src: url('shared/assets/fonts/CirceRounded-Alt-Bold.woff') format("woff");
        font-weight: 600;
        font-display: swap;
        font-style: normal;
    }

    body {
        font-family: 'Circe Rounded', sans-serif;
        line-height: 1.5;
        font-weight: 400;
        font-size: var(--fz-base);
        color: var(--color-text);
        margin: 0;

        min-height: 100vh;
        background-color: var(--bg-main);

        overflow-x: hidden;
    }


    #root {
        height: 100%;
    }

    ._container {
        max-width: 1230px;
        margin-inline: auto;
        padding-inline: 15px;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    ol,
    ul {
        list-style: none;
        padding: 0;
    }

    h1,h2,h3,h4,h5,
    p,
    ul,ol,li,
    {
        margin: 0;
    }

    input,
    button {
        outline: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .textarea {
        width: 100%;
        padding: 5px 10px;
        background-color: transparent;
        border: 1px solid transparent;
        border-radius: var(--border-r-base);

        color: var(--color-text);
        font-family: inherit;
        font-size: inherit;
        resize: none;
        overflow: auto;

        &:focus {
            outline: none !important;
            border-color: var(--color-border);
        }
    }
    .textarea--gray {
        background-color: var(--bg-light);
        min-height: 50px;
    }

`
