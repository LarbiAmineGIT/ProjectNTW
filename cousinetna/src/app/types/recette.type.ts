export type Recette = {
    id?: string;
    photo?: string;
    name: string;
    description: string;
    dureeh: string;
    dureem: string;
    categorie: string;
    nbportions: string;
    niveaudifficulte: number;
    listeingreditens: Ingredient[];
  };
  
export type Ingredient = {
  name : string;
  prix : string;
};