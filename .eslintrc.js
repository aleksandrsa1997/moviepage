module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'app',
        rootPathPrefix: '~',
      },
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'babel',
  ],
  rules: {
    'no-unused-vars': ['error', { caughtErrorsIgnorePattern: '^ignore' }],
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 'error',

    'linebreak-style': [ // Применять согласованный стиль переноса строки
      'error',
      'unix',
    ],
    'babel/new-cap': 1, // Игнорирует заглавные буквы
    'babel/camelcase': 1, // Названия переменных в camelCase стиле
    'babel/no-invalid-this': 1, // Запретить ключевое слово this в названии классов
    'babel/object-curly-spacing': 1, // Одинаковый интервал внутри фигурных скобок
    'babel/semi': 1, // Точка с запятой на конце
    'babel/no-unused-expressions': 1, // Запретить неиспользуемые выражения
    'babel/valid-typeof': 1, // Сравнение выражений с допустимыми строками
  },
};