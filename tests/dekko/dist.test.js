const $ = require('dekko');
const chalk = require('chalk');

$('dist')
  .isDirectory()
  .hasFile('antd-with-locales.js')
  .hasFile('antd-with-locales.min.js')
  .hasFile('antd.less')
  .hasFile('antd.dark.less')
  .hasFile('antd.compact.less')
  .hasFile('dark-theme.js');

// eslint-disable-next-line no-console
console.log(chalk.green('✨ `dist` directory is valid.'));
