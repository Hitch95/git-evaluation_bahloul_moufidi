#!/usr/bin/env node

const readline = require('readline');
const fs = require('fs');
const path = require('path');

let hasError = false;

function calculate(expression) {
    // Supprimer les espaces à gauche et à droite de l'expression
    expression = expression.trim();

    const regex = /^(\d+(\.\d+)?)(\s*[\+\-\*\/]\s*)(\d+(\.\d+)?)$/;
    const match = expression.match(regex);

    if (!match) {
        console.error(`Erreur de syntaxe pour le calcul: "${expression}"`);
        hasError = true;
        return null;
    }

    const num1 = parseFloat(match[1]);
    const operator = match[3].trim(); // Supprimer les espaces autour de l'opérateur
    const num2 = parseFloat(match[4]);
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                console.error('Division par zéro');
                hasError = true;
                return null;
            }
            result = num1 / num2;
            break;
        default:
            console.error(`Opérateur non supporté: "${operator}"`);
            hasError = true;
            return null;
    }

    // Arrondir le résultat à 2 chiffres après la virgule si nécessaire
    if (result % 1 !== 0) {
        result = parseFloat(result.toFixed(2));
    }

    return result;
}

function main() {
    if (process.stdin.isTTY) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.setPrompt('> ');
        rl.prompt();

        rl.on('line', (line) => {
            const result = calculate(line.trim());
            if (result !== null) {
                console.log(result);
            }
            rl.prompt();
        }).on('close', () => {
            console.log('Fin des calculs');
            process.exit(hasError ? 1 : 0);
        });
    } else {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: false
        });

        rl.on('line', (line) => {
            const result = calculate(line.trim());
            if (result !== null) {
                console.log(result);
            }
        }).on('close', () => {
            process.exit(hasError ? 1 : 0);
        });
    }
}
// Fonction pour traiter les fichiers de calcul
function processFiles() {
    const testDir = path.join(__dirname, '../test');
    const resultsDir = path.join(__dirname, '../results');

    if (!fs.existsSync(resultsDir)) {
        fs.mkdirSync(resultsDir);
    }

    fs.readdir(testDir, (err, files) => {
        if (err) {
            console.error('Erreur de lecture du dossier test:', err);
            process.exit(1);
        }

        files.forEach(file => {
            if (path.extname(file) === '.txt') {
                const filePath = path.join(testDir, file);
                const resultFilePath = path.join(resultsDir, path.basename(file, '.txt') + '-result.txt');

                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) {
                        console.error(`Erreur de lecture du fichier ${file}:`, err);
                        return;
                    }

                    const lines = data.split('\n').map(line => line.trim()).filter(line => line.length > 0);
                    const results = lines.map(line => calculate(line));

                    fs.writeFile(resultFilePath, results.join('\n'), 'utf8', err => {
                        if (err) {
                            console.error(`Erreur d'écriture du fichier ${resultFilePath}:`, err);
                        } else {
                            console.log(`Résultats écrits dans ${resultFilePath}`);
                        }
                    });
                });
            }
        });
    });
}

main();
// Démarrage du traitement des fichiers
processFiles();