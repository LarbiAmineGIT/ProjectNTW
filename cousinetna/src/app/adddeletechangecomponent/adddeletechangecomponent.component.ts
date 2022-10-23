import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Recette } from '../types/recette.type';
import { defaultIfEmpty, filter, map, mergeMap, Observable } from 'rxjs';

@Component({
  selector: 'app-adddeletechangecomponent',
  templateUrl: './adddeletechangecomponent.component.html',
  styleUrls: ['./adddeletechangecomponent.component.scss']
})
export class AdddeletechangecomponentComponent implements OnInit {

  private _dialogStatus: string;
  private _peopleDialog: MatDialogRef<DialogComponent, Recette> | undefined;
  private _recettes: Recette[];

  constructor(private _dialog: MatDialog) { 
    this._dialogStatus = 'inactive';
    this._recettes = [];
  }

  ngOnInit(): void {
  }

  get dialogStatus(): string {
    return this._dialogStatus;
  }

  showDialog(): void {
    // set dialog status
    this._dialogStatus = 'active';

    // open modal
    this._peopleDialog = this._dialog.open(DialogComponent, {
      width: '500px',
      disableClose: true,
    });

    // subscribe to afterClosed observable to set dialog status and do process
    this._peopleDialog
      .afterClosed()
      .pipe(
        filter((recette: Recette | undefined) => !!recette),
        map((recette: Recette | undefined) => {
          return recette;
        }),
        mergeMap((recette: Recette | undefined) => this._add())
      )
      .subscribe({
        next: (recette: Recette) => (this._recettes = this._recettes.concat(recette)),
        error: () => (this._dialogStatus = 'inactive'),
        complete: () => (this._dialogStatus = 'inactive'),
      });
  }

  private _add(){
    return this._recettes;
  }
}
