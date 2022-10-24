import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';

export type RecetteDocument = Recette & Document;

@Schema({
  toJSON: {
    virtuals: true,
    transform: (doc: any, ret: any) => {
      // delete obsolete data
      delete ret._id;
    },
  },
  versionKey: false,
})
export class Recette {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  })
  _id: any;

  @Prop({
    type: String,
    required: true,
    trim: true,
  })
  photo: string;

  @Prop({
    type: String,
    required: true,
    minlength: 2,
    trim: true,
  })
  nom: string;

  @Prop({
    type: Number,
    required: true,
    trim: true,
  })
  tempsHeures: number;

  @Prop({
    type: Number,
    required: true,
    trim: true,
  })
  tempsMinutes: number;

  @Prop({
    type: String,
    required: true,
    minlength: 2,
    trim: true,
  })
  description: string;

  @Prop({
    type: String,
    required: true,
    minlength: 2,
    trim: true,
  })
  idCategorie: string;

  @Prop({
    type: Number,
    required: true,
    trim: true,
  })
  idType: number;

  @Prop({
    type: Number,
    required: true,
    trim: true,
  })
  nbNotes: number;

  @Prop({
    type: Number,
    required: true,
    trim: true,
  })
  noteTotal: number;

  @Prop({
    type: Number,
    required: true,
    trim: true,
  })
  nbPortions: number;

  @Prop({
    type: String,
    required: true,
    minlength: 2,
    trim: true,
  })
  commentaire: string;

  @Prop({
    type: Number,
    required: true,
    trim: true,
  })
  niveauDifficulte: number;

  @Prop(
    raw({
      idIngredient: {
        type: String,
        required: true,
        trim: true,
      },
      quantite: {
        type: Number,
        required: true,
      }
    }),
  )
  ingredients: any;


}

export const RecetteSchema = SchemaFactory.createForClass(Recette);
