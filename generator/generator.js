#!/usr/bin/env node

// Fonction pour générer un nombre aléatoire dans un intervalle donné
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fonction pour générer une expression aléatoire
function generateExpression() {
    const operators = ['+', '-', '*', '/'];
    const num1 = getRandomInt(1, 1000);
    const num2 = getRandomInt(1, 1000);
    const operator = operators[Math.floor(Math.random() * operators.length)];
    return `${num1}${operator}${num2}`;
}

// Nombre d'expressions à générer (passé en argument)
const numExpressions = parseInt(process.argv[2]);

if (isNaN(numExpressions) || numExpressions <= 0) {
    console.error('Veuillez fournir un nombre valide d\'expressions à générer.');
    process.exit(1);
}

// Générer et afficher les expressions
for (let i = 0; i < numExpressions; i++) {
    console.log(generateExpression());
}
