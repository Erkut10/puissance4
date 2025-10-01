// Projet Puissance 4 qui se joue automatiquement et nous affiche le résultat final

// on déclare nos constantes
const LIGNES = 6;
const COLONNES = 7;
const VIDE = '.';
const JOUEUR1 = 'R';
const JOUEUR2 = 'J';

// on va créer une grille vide avec un tableau en 2d pour notre plateau
let grille: string[][] = [];
for (let i = 0; i < LIGNES; i++) grille.push(Array(COLONNES).fill(VIDE));

