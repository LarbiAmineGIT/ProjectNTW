import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste-recettes',
  templateUrl: './liste-recettes.component.html',
  styleUrls: ['./liste-recettes.component.scss']
})
export class ListeRecettesComponent implements OnInit {

  listeRecettes:any[]=[];
  categorie:string="";

  val2: number = 3;

  constructor(
    private route: ActivatedRoute,
  ) {
    this.categorie = this.route.snapshot.paramMap.get('categorie')!;
   }

  ngOnInit(): void {
    this.listeRecettes= [
      {
        photo: 'https://cdn.vox-cdn.com/thumbor/dFTj61C1YkIBCN8IytARX65bSAA=/0x0:960x639/1270x953/filters:focal(404x244:556x396):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/63084252/foodlife.0.jpg',
        nom: 'Nom Recette',
        tempsHeures: 2,
        tempsMinutes: 30,
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        idCategorie: '63525f552d244e5bb912cfeb',
        idType: 2,
        nbNotes: 5,
        noteTotal: 16,
        note:3,
        nbPortions:6,
        commentaire:'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        niveauDifficulte:1,
        ingredients:[
        {
          idIngredient: '63525f552d244e5bb912cfeb',
          quantite:'500g'
        },{
          idIngredient: '554d1228deb74a1c',
          quantite:'2'
        }
        ]
      },
      {
        photo: 'https://cdn.vox-cdn.com/thumbor/dFTj61C1YkIBCN8IytARX65bSAA=/0x0:960x639/1270x953/filters:focal(404x244:556x396):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/63084252/foodlife.0.jpg',
        nom: 'Nom Recette',
        tempsHeures: 0,
        tempsMinutes: 30,
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        idCategorie: '63525f552d244e5bb912cfeb',
        idType: 2,
        nbNotes: 4,
        noteTotal: 16,
        note:2,
        nbPortions:6,
        commentaire:'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        niveauDifficulte:1,
        ingredients:[
        {
          idIngredient: '63525f552d244e5bb912cfeb',
          quantite:'500g'
        },{
          idIngredient: '554d1228deb74a1c',
          quantite:'2'
        }
        ]
      },
      {
        photo: 'https://cdn.vox-cdn.com/thumbor/dFTj61C1YkIBCN8IytARX65bSAA=/0x0:960x639/1270x953/filters:focal(404x244:556x396):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/63084252/foodlife.0.jpg',
        nom: 'Nom Recette',
        tempsHeures: 1,
        tempsMinutes: 35,
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        idCategorie: '63525f552d244e5bb912cfeb',
        idType: 2,
        nbNotes: 4,
        noteTotal: 16,
        note:4,
        nbPortions:6,
        commentaire:'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        niveauDifficulte:1,
        ingredients:[
        {
          idIngredient: '63525f552d244e5bb912cfeb',
          quantite:'500g'
        },{
          idIngredient: '554d1228deb74a1c',
          quantite:'2'
        }
        ]
      },
      {
        photo: 'https://cdn.vox-cdn.com/thumbor/dFTj61C1YkIBCN8IytARX65bSAA=/0x0:960x639/1270x953/filters:focal(404x244:556x396):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/63084252/foodlife.0.jpg',
        nom: 'Nom Recette',
        tempsHeures: 2,
        tempsMinutes: 0,
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        idCategorie: '63525f552d244e5bb912cfeb',
        idType: 2,
        nbNotes: 4,
        noteTotal: 16,
        note:4,
        nbPortions:6,
        commentaire:'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        niveauDifficulte:1,
        ingredients:[
        {
          idIngredient: '63525f552d244e5bb912cfeb',
          quantite:'500g'
        },{
          idIngredient: '554d1228deb74a1c',
          quantite:'2'
        }
        ]
      },
      {
        photo: 'https://cdn.vox-cdn.com/thumbor/dFTj61C1YkIBCN8IytARX65bSAA=/0x0:960x639/1270x953/filters:focal(404x244:556x396):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/63084252/foodlife.0.jpg',
        nom: 'Nom Recette',
        tempsHeures: 2,
        tempsMinutes: 30,
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        idCategorie: '63525f552d244e5bb912cfeb',
        idType: 2,
        nbNotes: 4,
        noteTotal: 16,
        note:5,
        nbPortions:6,
        commentaire:'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        niveauDifficulte:1,
        ingredients:[
        {
          idIngredient: '63525f552d244e5bb912cfeb',
          quantite:'500g'
        },{
          idIngredient: '554d1228deb74a1c',
          quantite:'2'
        }
        ]
      },
      {
        photo: 'https://cdn.vox-cdn.com/thumbor/dFTj61C1YkIBCN8IytARX65bSAA=/0x0:960x639/1270x953/filters:focal(404x244:556x396):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/63084252/foodlife.0.jpg',
        nom: 'Nom Recette',
        tempsHeures: 2,
        tempsMinutes: 30,
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        idCategorie: '63525f552d244e5bb912cfeb',
        idType: 2,
        nbNotes: 4,
        noteTotal: 16,
        note:3,
        nbPortions:6,
        commentaire:'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        niveauDifficulte:1,
        ingredients:[
        {
          idIngredient: '63525f552d244e5bb912cfeb',
          quantite:'500g'
        },{
          idIngredient: '554d1228deb74a1c',
          quantite:'2'
        }
        ]
      }
    ]
  }

}
