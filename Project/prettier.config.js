//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],

  // Formatting
  arrowParens: 'always',
  bracketSameLine: true,
  bracketSpacing: true,
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'ignore',
  jsxSingleQuote: true,
  printWidth: 150,
  proseWrap: 'preserve',
  semi: false,
  singleAttributePerLine: false,
  singleQuote: true,
  tabWidth: 4,
  trailingComma: 'all',
  useTabs: false,

  // Import sorting configuration
  importOrder: [
    '^react$',
    '^react-dom$',
    '',
    '<BUILTIN_MODULES>',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/(.*)$',
    '',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
}

export default config
