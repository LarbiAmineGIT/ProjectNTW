export type Recette = {
  id: string;
  photo: string;
  nom: string;
  tempsHeures: number;
  tempsMinutes: number;
  description: string;
  idCategorie: string;
  idType: number;
  nbNotes: number;
  noteTotal: number;
  nbPortions: number;
  commentaire: string;
  niveauDifficulte: number;
  ingredients: Ingredient[];
};

export type Ingredient = {
  idIngredient: string;
  quantite: number;
};
