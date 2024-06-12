# Projet Minitrice

## Description

Le projet Minitrice est composé de deux scripts JavaScript (`minitrice.js` et `generator.js`) qui fonctionnent avec Node.js. Minitrice permet d'effectuer des calculs arithmétiques simples et peut être utilisé de manière interactive ou avec des entrées provenant d'autres programmes via des pipes. Le générateur génère des expressions arithmétiques aléatoires pouvant être directement utilisées par Minitrice.

## Prérequis

- [Node.js](https://nodejs.org/) (version 12 ou ultérieure)

## Installation

Clonez le dépôt et accédez au répertoire du projet :

```bash
git clone <https://github.com/Hitch95/git-evaluation_bahloul_moufidi.git>
cd <git-evaluation_bahloul_moufidi>
```

Assurez-vous que les scripts sont exécutables :

```bash
chmod +x generator/generator.js
chmod +x minitrice/minitrice.js
```

# Utilisation
## Minitrice
Le script `minitrice.js` permet d'effectuer des calculs arithmétiques basiques. Il peut être utilisé en mode interactif ou pour lire des entrées depuis un pipe.

Mode interactif
Exécutez le script en mode interactif pour entrer des expressions manuellement :

```bash
$ ./minitrice/minitrice.js
> 3 + 5
8
> 12 / 7
1.71
> 5 * 9
45
> Ctrl+D
Fin des calculs
```
### Mode pipe avec echo
Utilisez echo pour envoyer une expression à Minitrice :

```bash
$ echo "3 + 5" | ./minitrice/minitrice.js
8
$ echo "12 / 7" | ./minitrice/minitrice.js
1.71
```

### Mode pipe avec cat
Utilisez cat pour envoyer des expressions depuis un fichier à Minitrice :

```bash
$ cat good-expression.txt | ./minitrice/minitrice.js
8
1.71
45
```

## Generator
Le script `generator.js` génère des expressions arithmétiques aléatoires. Vous pouvez spécifier le nombre d'expressions à générer en passant un argument au script.

### Génération d'expressions
```bash
$ ./generator/generator.js 2
357+612
482/21
```
###  Utilisation combinée
Utilisez un pipe pour connecter la sortie de generator.js à `minitrice.js` :

```bash
$ ./generator/generator.js 2 | ./minitrice/minitrice.js
969
22.95
```

## Structure du projet
minitrice/minitrice.js : Ce script lit les entrées et effectue les calculs arithmétiques. Il prend en charge les opérations suivantes : addition, soustraction, multiplication et division. Les résultats sont arrondis à deux chiffres après la virgule si nécessaire.

generator/generator.js : Ce script génère des expressions arithmétiques aléatoires. Les nombres sont choisis aléatoirement dans l'intervalle [1, 1000], et l'opération est également choisie aléatoirement parmi +, -, * et /.

test/good-expression.txt : Ce fichier contient des expressions arithmétiques valides à des fins de test. Vous pouvez utiliser ce fichier avec cat pour tester Minitrice.

## Explications détaillées

### minitrice.js
Le script `minitrice.js` lit les expressions arithmétiques depuis l'entrée standard (STDIN) ou de manière interactive. Il vérifie la validité de chaque expression et calcule le résultat. Les erreurs de syntaxe et de division par zéro sont gérées, et des messages d'erreur appropriés sont affichés.

### generator.js
Le script `generator.js` génère des expressions arithmétiques aléatoires. Vous pouvez spécifier le nombre d'expressions à générer en passant un argument au script. Les expressions générées peuvent ensuite être utilisées comme entrée pour `minitrice.js`.

### good-expression.txt
Le fichier `good-expression.txt` contient des expressions arithmétiques valides pour tester Minitrice. Vous pouvez utiliser `cat` pour lire ce fichier et envoyer son contenu à Minitrice via un pipe.

### Fonctionnement des scripts
<ol>
<li>
Entrée : Les expressions peuvent être saisies manuellement, lues depuis un fichier ou générées aléatoirement.
</li>
<li>
Traitement : Minitrice lit chaque expression, vérifie sa validité et calcule le résultat.
</li>
<li>
Sortie : Les résultats des calculs sont affichés sur la sortie standard (STDOUT). Les erreurs sont également affichées sur la sortie standard avec des messages appropriés.
</li>
</ol>

## Exécution avec npm, yarn ou pnpm
Bien que les scripts puissent être exécutés directement, vous pouvez également configurer des scripts npm pour les exécuter avec npm, yarn ou pnpm. Voici un exemple de `package.json` :

```js
{
  "name": "minitrice",
  "version": "1.0.0",
  "description": "Un projet pour effectuer des calculs arithmétiques et générer des expressions aléatoires",
  "main": "minitrice.js",
  "scripts": {
    "minitrice": "node minitrice/minitrice.js",
    "generator": "node generator/generator.js 2",
    "test": "cat test/good-expression.txt | node minitrice/minitrice.js"
  },
  "author": "",
  "license": "ISC"
}

Pour utiliser ces scripts, exécutez les commandes suivantes :

```bash
# Avec npm
npm run minitrice
npm run generator
npm run test

# Avec yarn
yarn minitrice
yarn generator
yarn test

# Avec pnpm
pnpm run minitrice
pnpm run generator
pnpm run test
```
Avec ces instructions, vous devriez être en mesure de configurer et d'utiliser le projet Minitrice facilement.
