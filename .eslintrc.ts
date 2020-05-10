import paths from './config/paths';

export default {
    extends: [
        '@werkzeugkiste',
        '@werkzeugkiste/eslint-config/typescript',
        '@werkzeugkiste/eslint-config/node',
    ],
    globals: {
        __BROWSER__: true,
        __SERVER__: true,
    },
    settings: {
        'import/resolver': {
            node: {
                paths: paths.resolveModules,
                extensions: ['.js', '.ts'],
            },
        },
    },
    rules: {
        'import/no-unassigned-import': 0,
        'import/no-named-as-default-member': 0,
        'prettier/prettier': 'error',
        'security/detect-non-literal-fs-filename': 'off',
    },
};