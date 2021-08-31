module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': ['error', 'never'], // 函数声明时括号与函数名间加空格，不允许有空格
    indent: [
        'error',
        4,
        {
            SwitchCase: 1,
            MemberExpression: 1,
        }
    ], // 使用四个空格进行缩进
  }
}
