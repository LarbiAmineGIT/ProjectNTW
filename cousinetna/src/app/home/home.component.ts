import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../services/recette.service';
import { Recette } from '../types/recette.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  uneRecette: any;

  constructor(private recetteService : RecetteService) { }

  ngOnInit(): void {
    this.recetteService.fetchRandom().subscribe({next:(unerecette: Recette)=> this.uneRecette = unerecette });
  }

}
