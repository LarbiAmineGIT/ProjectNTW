import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeRecettesComponent } from './liste-recettes.component';
import { RouterModule, Routes } from '@angular/router';
import {RatingModule} from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DividerModule} from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { TabViewModule } from "primeng/tabview";
import { DialogModule } from "primeng/dialog";
import { OverlayPanelModule } from 'primeng/overlaypanel';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SliderModule} from 'primeng/slider';
import { ChipModule } from 'primeng/chip';

const routes: Routes = [
  {
    path: '',
    component: ListeRecettesComponent
  }
];

@NgModule({
  declarations: [ListeRecettesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RatingModule,
    FormsModule,    
    DividerModule,
    TableModule,
    TabViewModule,
    DialogModule,
    ReactiveFormsModule,
    OverlayPanelModule,
    SelectButtonModule,
    SliderModule,
    ChipModule
    
  ]
})
export class ListRecipesModule { }
