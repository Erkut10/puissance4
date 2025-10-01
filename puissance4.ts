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


// pour placer un jeton
function poserJeton(colonne: number, joueur: string): boolean {
  for (let ligne = LIGNES-1; ligne>=0; ligne--) {
    if (grille[ligne][colonne]===VIDE) { grille[ligne][colonne]=joueur; return true; }
  }
  return false;
}

// on va vérifier la victoire en regardant si il y a 4 jetons alignées dans les directions possibles
function verifierVictoire(joueur: string): boolean {
  // horizontal
  for (let l=0;l<LIGNES;l++)
    for (let c=0;c<=COLONNES-4;c++)
      if (grille[l][c]===joueur && grille[l][c+1]===joueur && grille[l][c+2]===joueur && grille[l][c+3]===joueur) return true;
  // vertical
  for (let c=0;c<COLONNES;c++)
    for (let l=0;l<=LIGNES-4;l++)
      if (grille[l][c]===joueur && grille[l+1][c]===joueur && grille[l+2][c]===joueur && grille[l+3][c]===joueur) return true;
  // diagonale ↘
  for (let l=0;l<=LIGNES-4;l++)
    for (let c=0;c<=COLONNES-4;c++)
      if (grille[l][c]===joueur && grille[l+1][c+1]===joueur && grille[l+2][c+2]===joueur && grille[l+3][c+3]===joueur) return true;
  // diagonale ↙
  for (let l=3;l<LIGNES;l++)
    for (let c=0;c<=COLONNES-4;c++)
      if (grille[l][c]===joueur && grille[l-1][c+1]===joueur && grille[l-2][c+2]===joueur && grille[l-3][c+3]===joueur) return true;
  return false;
}

// on va choisir une colonne aléatoire pour jouer
function colonneAleatoire(): number {
  const colonnesDispo:number[]=[];
  for (let c=0;c<COLONNES;c++) if (grille[0][c]===VIDE) colonnesDispo.push(c);
  return colonnesDispo[Math.floor(Math.random()*colonnesDispo.length)];
}


