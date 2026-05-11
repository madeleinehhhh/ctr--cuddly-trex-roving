// .prettierrc.mjs
export default {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  endOfLine: 'lf',        // consistent line endings (good for Mac/Ubuntu cross-dev)
  trailingComma: 'es5',   // optional but commonly paired with the above

  // overrides: [
  //   {
  //     files: '*.md',
  //     options: {
  //       proseWrap: 'preserve',  // don't reflow markdown paragraphs
  //     },
  //   },
  //   {
  //     files: '*.njk',
  //     options: {
  //       parser: 'html',         // closest available parser for njk
  //     },
  //   },
  // ],
};