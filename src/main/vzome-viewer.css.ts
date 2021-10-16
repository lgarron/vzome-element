export const vZomeCSS: string = `
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
`;
