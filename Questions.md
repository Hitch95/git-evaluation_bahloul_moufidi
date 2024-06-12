# Git est un gestionnaire de version décentralisé.

## Qu’est-ce que cela signifie ?

Cela signifie que chaque utilisateur possède une copie complète de l'historique de développement de tout le projet, avec toutes ses branches et ses versions. Contrairement aux systèmes de gestion de versions centralisés, il n'y a pas de serveur central unique où tout le code est stocké et géré.

## Quel est le rôle joué par un dépôt central sur GitHub ou GitLab dans ce cas ? (Justifier)

Le dépôt central sur GitHub ou GitLab facilite la collaboration en fournissant un point de convergence pour les contributions des utilisateurs, permettant le partage et la coordination du code source dans un environnement Git décentralisé.

## À quoi sert la commande `git fetch -p` ?

La commande `git fetch -p` sert à récupérer les modifications depuis le dépôt distant (remote) et à nettoyer localement les références des branches qui ont été supprimées sur le dépôt distant. Cela permet de garder à jour le suivi des branches distantes et d'éviter d'avoir des références locales obsolètes.

## Dans quelles conditions est-ce qu’un conflit apparaît avec git ?

Un conflit avec Git survient lorsqu'il y a des modifications simultanées dans une branche, entraînant des modifications incompatibles dans le même fichier lors d'une fusion. Il se produit également lorsqu'une fusion ne peut pas être effectuée automatiquement en raison de changements conflictuels ou lorsqu'une réécriture de l'historique crée des incompatibilités entre les modifications.

## Lorsque vous résolvez un conflit, quelle est la dernière commande git que vous devez exécuter ?

La dernière commande Git à exécuter après avoir résolu un conflit est `git commit`. Cette commande permet de finaliser la résolution du conflit en enregistrant les modifications et en créant un nouveau commit qui représente la fusion des branches conflictuelles.

## Depuis GitHub, après avoir accepté une contribution sur la branche principale, que devez-vous faire pour mettre à jour votre branche principale localement ?

```bash
cd path/to/your/local/repository
git fetch origin
git checkout main
git pull origin main
```

## Quelle est la différence entre les commandes git reset --soft et git reset --hard ?
*(Donner un cas d’usage pratique et courant pour chacune de ces commandes)*
Les commandes `git reset --soft` et `git reset --hard` sont utilisées pour réinitialiser l'état d'un dépôt Git, mais elles diffèrent par l'étendue de cette réinitialisation.


`git reset --soft` :
Cas d’usage : Modifier un message de commit incorrect ou ajouter des fichiers oubliés avant de refaire un commit.
Impact : Le commit est annulé, mais les modifications sont conservées dans la zone de staging.

`git reset --hard` :
Cas d’usage : Annuler des modifications locales non validées qui ont rendu le projet instable, et revenir à un état stable du dépôt.
Impact : Toutes les modifications non validées sont supprimées, et le répertoire de travail est réinitialisé à l’état du dernier commit.

## Voici le log d’un dépôt git : Quelle est la (ou les) commande à exécuter pour transformer les commits 9f64652 et 68cd016 en un seul commit avec un nouveau message ?
Commencer un rebase interactif depuis le commit juste avant `9f64652`. 
Si `9f64652` est 2 commits en arrière de `HEAD`, nous utilisons `HEAD~2`. Ce qui donne :
```bash
git rebase -i HEAD~2
# (changer pick en squash (ou s) pour le deuxième commit)
pick 9f64652 Commit message for 9f64652
squash 68cd016 Commit message for 68cd016
# Sauvegarder et fermer l'éditeur
# Modifier le message de validation dans le prochain éditeur qui s'ouvre
# Sauvegarder et fermer l'éditeur
```

## Pourquoi est-il déconseillé de modifier l'historique Git qui a déjà été partagé publiquement ?
Modifier l'historique Git partagé est généralement déconseillé en raison de la confusion pour les collaborateurs, du risque de pertes de données, des problèmes de références, de la complexité supplémentaire, et des impacts sur les scripts et automatisations. Cependant, des réécritures peuvent être nécessaires pour retirer des informations sensibles ou nettoyer l'historique avant de rendre le dépôt public.