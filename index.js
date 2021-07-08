import { program } from "commander";
import chalk from "chalk";
import clipboardy from 'clipboardy'
import createPassword from "./utils/createPassword.js"
import savePassword from './utils/savePassword.js'

program.version('1.0.0').description('Simple Password Generator')

program
    .option('-l, --length <number>', 'Length of password', '8')
    .option('-s, --save', 'Save password to passwords.txt')
    .option('-nn, --no-numbers', 'Remove numbers')
    .option('-ns, --no-symbols', 'Remove symbols')
    .parse();
const {length, save, numbers, symbols} =program.opts();

// Password generator

const passwordGenerated = createPassword(length, numbers, symbols)

// Save Password
if(save){
    savePassword(passwordGenerated);
}

clipboardy.writeSync(passwordGenerated);

console.log(chalk.blue('Generated Password : ')+chalk.bold(passwordGenerated))

console.log(chalk.yellow('Password copied to clipboard'))
