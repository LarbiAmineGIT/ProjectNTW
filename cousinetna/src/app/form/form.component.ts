import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {FormControl, Validators, FormsModule} from '@angular/forms';
import { Recette } from '../types/recette.type';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
// private property to store update mode flag
private _isUpdateMode: boolean;
// private property to store model value
private _model: Recette;
// private property to store cancel$ value
private readonly _cancel$: EventEmitter<void>;
// private property to store submit$ value
private readonly _submit$: EventEmitter<Recette>;
private  rateControl: FormControl<string | null>;

/**
 * Component constructor
 */
constructor() {
  this.rateControl = new FormControl("", [Validators.max(100), Validators.min(0)])
  this._model = {} as Recette;
  this._isUpdateMode = false;
  this._submit$ = new EventEmitter<Recette>();
  this._cancel$ = new EventEmitter<void>();
}

/**
 * Sets private property _model
 */
@Input()
set model(model: Recette) {
  this._model = model;
}

/**
 * Returns private property _model
 */
get model(): Recette {
  return this._model;
}

/**
 * Returns private property _isUpdateMode
 */
get isUpdateMode(): boolean {
  return this._isUpdateMode;
}

/**
 * Returns private property _cancel$
 */
@Output('cancel')
get cancel$(): EventEmitter<void> {
  return this._cancel$;
}

/**
 * Returns private property _submit$
 */
@Output('submit')
get submit$(): EventEmitter<Recette> {
  return this._submit$;
}

/**
 * OnInit implementation
 */
ngOnInit(): void {
}

/**
 * Function to handle component update
 */
ngOnChanges(record: any): void {
  if (record.model && record.model.currentValue) {
    this._model = record.model.currentValue;
    this._isUpdateMode = true;
  } else {
    this._model = {
      name: '',
      description: '',
      dureeh: '',
      dureem: '',
      categorie: '',
      nbportions: '',
      niveaudifficulte: 0,
      listeingreditens: [],
    };
    this._isUpdateMode = false;
  }
}


cancel(): void {
  this._cancel$.emit();
}


submit(): void {
  this._submit$.emit(this._model);
}
}
