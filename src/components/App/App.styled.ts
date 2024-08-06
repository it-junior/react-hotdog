import styled, { createGlobalStyle } from 'styled-components';

export const Wrapper = styled.div`
  width: 920px;
  margin: 0 auto;
`;

export const GlobalStyle = createGlobalStyle`
  @font-face { font-family: Inter; font-style: normal; font-weight: 100; font-display: swap; src: url("./fonts/Inter-Thin.woff2") format("woff2"); }
  
  @font-face { font-family: Inter; font-style: italic; font-weight: 100; font-display: swap; src: url("./fonts/Inter-ThinItalic.woff2") format("woff2"); }
  
  @font-face { font-family: Inter; font-style: normal; font-weight: 200; font-display: swap; src: url("./fonts/Inter-ExtraLight.woff2") format("woff2"); }
  
  @font-face { font-family: Inter; font-style: italic; font-weight: 200; font-display: swap; src: url("./fonts/Inter-ExtraLightItalic.woff2") format("woff2"); }
  
  @font-face { font-family: Inter; font-style: normal; font-weight: 300; font-display: swap; src: url("./fonts/Inter-Light.woff2") format("woff2"); }
  
  @font-face { font-family: Inter; font-style: italic; font-weight: 300; font-display: swap; src: url("./fonts/Inter-LightItalic.woff2") format("woff2"); }
  
  @font-face { font-family: Inter; font-style: normal; font-weight: 400; font-display: swap; src: url("./fonts/Inter-Regular.woff2") format("woff2"); }
  
  @font-face { font-family: Inter; font-style: italic; font-weight: 400; font-display: swap; src: url("./fonts/Inter-Italic.woff2") format("woff2"); }
  
  @font-face { font-family: Inter; font-style: normal; font-weight: 500; font-display: swap; src: url("./fonts/Inter-Medium.woff2") format("woff2"); }
  
  @font-face { font-family: Inter; font-style: italic; font-weight: 500; font-display: swap; src: url("./fonts/Inter-MediumItalic.woff2") format("woff2"); }
  
  @font-face { font-family: Inter; font-style: normal; font-weight: 600; font-display: swap; src: url("./fonts/Inter-SemiBold.woff2") format("woff2"); }
  
  @font-face { font-family: Inter; font-style: italic; font-weight: 600; font-display: swap; src: url("./fonts/Inter-SemiBoldItalic.woff2") format("woff2"); }
  
  @font-face { font-family: Inter; font-style: normal; font-weight: 700; font-display: swap; src: url("./fonts/Inter-Bold.woff2") format("woff2"); }
  
  @font-face { font-family: Inter; font-style: italic; font-weight: 700; font-display: swap; src: url("./fonts/Inter-BoldItalic.woff2") format("woff2"); }
  
  @font-face { font-family: Inter; font-style: normal; font-weight: 800; font-display: swap; src: url("./fonts/Inter-ExtraBold.woff2") format("woff2"); }
  
  @font-face { font-family: Inter; font-style: italic; font-weight: 800; font-display: swap; src: url("./fonts/Inter-ExtraBoldItalic.woff2") format("woff2"); }
  
  @font-face { font-family: Inter; font-style: normal; font-weight: 900; font-display: swap; src: url("./fonts/Inter-Black.woff2") format("woff2"); }
  
  @font-face { font-family: Inter; font-style: italic; font-weight: 900; font-display: swap; src: url("./fonts/Inter-BlackItalic.woff2") format("woff2"); }


  body {
    margin: 0;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    text-size-adjust: 100%;
    text-rendering: optimizelegibility;
    height: 100%;
    position: relative;
    font-weight: 400;
    font-size: ${p => p.theme.fontSize.default};
    line-height: ${p => p.theme.lineHeight.default};
    color: ${p => p.theme.colors.text};
    background: ${p => p.theme.colors.background};
  }

  /**
   * 1. Correct the line height in all browsers.
   * 2. Prevent adjustments of font size after orientation changes in iOS.
   */

  html {
    line-height: 1.15; /* 1 */
    text-size-adjust: 100%; /* 2 */
  }

  /* Sections
     ========================================================================== */

  /**
   * Render the \`main\` element consistently in IE.
   */

  main {
    display: block;
  }

  /**
   * Correct the font size and margin on \`h1\` elements within \`section\` and
   * \`article\` contexts in Chrome, Firefox, and Safari.
   */

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  a {
    text-decoration: none;
    background-color: transparent;
  }


  /* Grouping content
     ========================================================================== */

  /**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */

  pre {
    font-family: monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /* Text-level semantics
     ========================================================================== */

  /**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */

  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline dotted; /* 2 */
  }

  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */
  
  sup {
    top: -0.5em;
  }

  button {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    font-weight: 400;
    font-size: ${p => p.theme.fontSize.default};
    line-height: ${p => p.theme.lineHeight.default};
    color: ${p => p.theme.colors.text};
    
    &:hover {
      cursor: pointer;
    }
  }

  /* Embedded content
     ========================================================================== */

  /**
   * Remove the border on images inside links in IE 10.
   */

  img {
    border-style: none;
  }

  /**
   * Remove the inner border and padding in Firefox.
   */

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
   * Restore the focus styles unset by the previous rule.
   */

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
    margin: 0;
  }

  /**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */

  [type="search"] {
    appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  /**
   * Remove the inner padding in Chrome and Safari on macOS.
   */

  [type="search"]::-webkit-search-decoration {
    appearance: none;
  }

  /**
   * Add the correct display in IE 10.
   */

  [hidden] {
    display: none;
  }
`;
