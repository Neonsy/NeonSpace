//  @ts-check

import queryPlugin from '@tanstack/eslint-plugin-query';
import { tanstackConfig } from '@tanstack/eslint-config';
import prettierConfig from 'eslint-config-prettier';

export default [
    ...tanstackConfig,
    prettierConfig,
    {
        plugins: {
            '@tanstack/query': queryPlugin,
        },
        rules: {
            'import/no-cycle': 'off',
            'import/order': 'off',
            'sort-imports': 'off',
            '@typescript-eslint/array-type': 'off',
            '@typescript-eslint/require-await': 'off',
            '@tanstack/query/exhaustive-deps': 'error',
            '@tanstack/query/no-unstable-deps': 'error',
            'pnpm/json-enforce-catalog': 'off',
        },
    },
    {
        ignores: ['.output/**', 'tooling/eslint.config.js', 'tooling/prettier.config.js'],
    },
];
