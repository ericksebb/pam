// como tamo chamo Dabid, aqui é o arquivo principal da aplicação
// aqui é onde a mágica acontece
// muito obrigado por dar uma oportunidade de mostrar o que eu sei


// Si revisas este archivo en en el IDE, verás que hay un error en la importación de readline
// No existe la librería en el proyecto (node_modules), pero si logra compilar con tsc ya que es una librería
// nativa de TypeScript

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countVowels(chain: string): number {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerChain = chain.toLowerCase();
    let count = 0;

//  El for of itera sobre los caracteres de la cadena y los compara con las vocales 

    for (let char of lowerChain) {
        if (vowels.includes(char)) {
            count++;
        }
    }

//  Creo que se sobreentiende lo que este count hace

    return count;
}

//  Incluí readline para poder recibir la cadena de texto por consola
//  Qué pereza estar escribiendo directamente en el código las cadenas para después compilar

rl.question('Write a sentence: ', (chain: string) => {
    const numVowels = countVowels(chain);
    console.log(`The sentence has ${numVowels} vowels`); 

    rl.close();

});