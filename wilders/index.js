const chalk = require('chalk');
const names = {
    name1: 'Franck',
    name2: 'Anais',
    name3: 'Lucille',
    name4: 'Rodolphe',
} 

console.log(chalk.red(names.name1));
console.log(chalk.blue(names.name2));
console.log(chalk.magenta(names.name3));
console.log(chalk.green(names.name4));