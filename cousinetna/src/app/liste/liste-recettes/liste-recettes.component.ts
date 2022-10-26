import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecetteService } from 'src/app/services/recette.service';
import {recettes} from '../../recettes';

@Component({
  selector: 'app-liste-recettes',
  templateUrl: './liste-recettes.component.html',
  styleUrls: ['./liste-recettes.component.scss']
})
export class ListeRecettesComponent implements OnInit {

  listeRecettes:any[]=[];
  isRecetteDetails: boolean = false;  
  clickedRecette:any;

  categorie:string="";
  idCategorie:string="";

  isFiltre: boolean = false;
  filtreForm: FormGroup;
  niveauxDifficulte:any[]=[];
  types:any[]=[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recetteService : RecetteService
  ) {
    this.categorie = this.route.snapshot.paramMap.get('categorie')!;
    this.idCategorie = this.router.getCurrentNavigation()?.extras.state?.['idCategorie'];
    this.filtreForm = new FormGroup({
      nom: new FormControl(null),
      niveauDifficulte: new FormControl(null),
      idType: new FormControl(null),      
      prix: new FormControl([0, 100]),
    });
    this.niveauxDifficulte = [
      { label: "Facile", value: "0" },
      { label: "Moyen", value: "1" },
      { label: "Difficile", value: "2" }
    ];
    this.types = [
      { label: "Entrée", value: "0" },
      { label: "Plat", value: "1" },
      { label: "Dessert", value: "2" },
      { label: "Boisson", value: "3" }
    ];
   }

  ngOnInit(): void {
    this.getRecettes();
  }

  getRecettes()
  {
    //this.listeRecettes= recettes;
    //this.listeRecettes=this.listeRecettes.filter(r=> r.idCategorie == this.idCategorie);

    let body ={
        idCategorie:this.idCategorie,
        nom: this.filtreForm.value.nom,
        niveauDifficulte: this.filtreForm.value.niveauDifficulte,
        idType: this.filtreForm.value.idType,      
        prix: this.filtreForm.value.prix,
    }
    this.recetteService.fetch().subscribe((res) =>{
      var minPrix = body.prix[0];
      var maxPrix = body.prix[1];
      var result = res.filter(r => r.idCategorie== this.idCategorie );
      // if(body.idType !=null) result = result.filter(r => body.idType.contains(r.idType));  
      if(body.niveauDifficulte !=null) result = result.filter(r => body.niveauDifficulte.includes(r.niveauDifficulte.toString()));
      console.log(result);
      if(body.nom !=null) result = result.filter(r => r.nom.includes(body.nom));
      console.log(result);
      console.log(body);
      console.log(res);
      this.listeRecettes=result;
    });

  }

  getPrixTotal(ingredients:any[])
  {
    var prix = 0;
    ingredients.forEach(ingredient => {
      prix += ingredient.prix * ingredient.quantite;
    });
    return prix;
  }

  toggleFilterPanel() {
    this.isFiltre = !this.isFiltre;
  }
  resetFiltre() {
    this.filtreForm.reset();
    this.filtreForm.get("prix")?.setValue([0,100]);
    this.getRecettes();
  }

  showRecette(r:any)
  {
    this.isRecetteDetails=true;
    this.clickedRecette = r;
  }

  getNiveauDifficulte(n:number)
  {
    return this.niveauxDifficulte.find(p => p.value==n)?.label;
  }
}
