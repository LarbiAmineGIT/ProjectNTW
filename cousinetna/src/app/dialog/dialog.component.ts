import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Recette } from '../types/recette.type';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

   /**
   * Component constructor
   */
    constructor(private _dialogRef: MatDialogRef<DialogComponent, Recette>, @Optional() @Inject(MAT_DIALOG_DATA) private _recette: Recette) {
    }
  
    /**
     * Returns person passed in dialog open
     */
    get recette(): Recette {
      return this._recette;
    }
  
    /**
     * OnInit implementation
     */
    ngOnInit(): void {
    }
  
    /**
     * Function to cancel the process and close the modal
     */
    onCancel(): void {
      this._dialogRef.close();
    }
  
    /**
     * Function to close the modal and send person to parent
     */
    onSave(recette: Recette): void {
      this._dialogRef.close(recette);
    }
    
}
