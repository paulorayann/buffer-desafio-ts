module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "extends": [
        'plugin:@typescript-eslint/recommended',
        'prettier/typescript-eslint',
        'standard'
    ],
    "rules": {
    }
}
