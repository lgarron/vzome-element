export const vZomeViewerCSS: string = `
:host {
  display: inline-grid;
  width: 384px;
  height: 256px;
  overflow: hidden;
}

:host > div {
  display: grid;
  overflow: hidden;
}

:host > div:empty {
  background: radial-gradient(#EEE, #AAA);
}

:host > div,
:host > div > div,
:host > div > div > div,
canvas {
  width: 100% !important;
  height: 100% !important;
  overflow: hidden;
}
`;
