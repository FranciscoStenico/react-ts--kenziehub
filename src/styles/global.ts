const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
    /* Color pallete */
  :root {
    --color-primary:          #ff577f;
    --color-primary-focus:    #ff427f;
    --color-primary-negative: #59323f;
    --color-grey-0:           #f8f9fa;
    --color-grey-1:           #868e96;
    --color-grey-10:          #767e86;
    --color-grey-2:           #343b41;
    --color-grey-20:          #2d343a;
    --color-grey-3:           #212529;
    --color-grey-4:           #121214;
    --color-grey-50:          #868e96;
    --color-success:          #3fe864;
    --color-negative:         #e83f5b;
  }

  /* Typhography */
  * {
    font-family: "Inter", sans-serif;
    margin: 0;
  }

  body {
    box-sizing: border-box;
    padding: 0;
    background-color: var(--color-grey-4);

    &::-webkit-scrollbar {
      width: 12px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--color-grey-20);
      border-radius: 20px;
      border: 3px solid var(--color-grey-4);
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  button {
    cursor: pointer;
    outline: none;
  }

  /* set Autocomplete fields */
  input:-webkit-autofill {
    box-shadow: 0 0 0 100px var(--color-grey-2) inset;
    transition: background-color infinite ease-in-out 0s;
    -webkit-text-fill-color: var(--color-grey-0);
  }
`;

export default GlobalStyle;
