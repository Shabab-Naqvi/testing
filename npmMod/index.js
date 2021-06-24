const chalk = require('chalk');
const validator = require("validator");
 
//console.log(chalk.red.underline.inverse('Hello world!'));

const res = validator.isEmail("parachinar@kust.com");
//console.log(res);
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));