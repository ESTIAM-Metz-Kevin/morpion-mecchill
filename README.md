# TIC TAC TOE

Le tic-tac-toe, aussi appelé « morpion », est un jeu de réflexion se pratiquant à deux joueurs au tour par tour dont le but est de créer le premier un alignement.

# Exercices

Vous pouvez utiliser la syntaxe moderne de javascript (ES6) pour faire les exercices.
Si vous comptez utiliser des classes dès le début, commencez par réfléchir à l'exercice 2.

## ▶️ Ex. 1

* Permettre à Goku et Saitama de lancer une partie de morpion
* Lorsqu'une partie est lancée, on doit pouvoir gérer les tours de jeu entre Goku et Saitama
* Quand on clique sur une cellule, cela doit ajouter soit une croix `<span class="cross"></span>` soit un cercle `<span class="circle"></span>` selon le joueur qui joue

## ▶️ Ex. 2

Si vous n'avez pas utilisez de classe, il est donc temps de nettoyer tout ce code en organisant dans des classes les différentes entités et fonctionnalités.

Un début d'organisation pourrait être par exemple :

* Une classe `Player`
  * Contient le nom du joueur
* Une classe `GameUI` qui gère toutes les manipulations sur les éléments HTML
  * Peut ajouter une croix ou un cercle sur le morpion
  * Peut modifier le nom du joueur en cours
  * Peut modifier le nombre de X joué
  * Peut modifier le nombre de O joué
* Une classe `Game`
  * `player1` : Contient une instance de `Player` pour le joueur 1
  * `player2` : Contient une instance de `Player` pour le joueur 2
  * `currentPlayer` : Contient une instance du `Player` en train de jouer

Pour que cela soit clair, chaque classe doit avoir une fonction, un métier bien précis, et ne s'occuper que de cela :
* La classe `Player` est là pour référencer les informations d'un joueur
* La classe `Game` s'occupe de gérer le bon déroulement du jeu, c'est une classe-clé dans l'organisation car le bon déroulement du jeu passe par cette classe
* `GameUI` s'occupe uniquement de mettre à jour l'HTML en fonction l'état de `Game`

**Ceci n'est qu'un bout de proposition. A vous d'ajouter ce qui vous semble nécéssaire pour arriver à lancer une partie de morpion entre deux joueurs.**

## ⭐ Bonus ⭐

Pour améliorer l'expérience de Goku et de Saitama, il serait sympa qu'ils puissent :
* Prévisualiser où est-ce qu'ils vont jouer la pièce (au survol de la souris) avant de choisir la case
* Mettre en valeur les 3 croix ou cercles qui offrent la victoire au joueur
  * Par exemple, cela peut-être en jouant avec la propriété `opacity` sur le style des éléments HTML (croix ou ronds) qui ne **sont pas** les points gagnants