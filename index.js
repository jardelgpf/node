import PromptSync from 'prompt-sync';
import chalk from 'chalk';
const prompt = PromptSync();

let nome = prompt('Informe seu nome: ')

console.log(`Seja bem vindo ${nome}`);
console.log(chalk.bgRgb(255,0,0).underline(nome));

