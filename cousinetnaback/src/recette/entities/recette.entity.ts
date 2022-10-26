import { Exclude, Expose, Type } from 'class-transformer';
import { IngredientEntity } from './ingredient.entity';
import { Recette } from '../schemas/recette.schema';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

@Exclude()
export class RecetteEntity {
  @ApiProperty({
    name: 'id',
    description: 'Unique identifier in the database',
    example: '5763cd4dc378a38ecd387737',
  })
  @Expose()
  @Type(() => String)
  id: string;

  @ApiProperty({
    name: 'photo',
    description: 'Photo URL',
    example: 'https://randomuser.me/portraits/men/55.jpg',
  })
  @Expose()
  @Type(() => String)
  photo: string;

  @ApiProperty({
    name: 'nom',
    description: 'Name',
    example: 'Recette1',
  })
  @Expose()
  @Type(() => String)
  nom: string;

  @ApiProperty({
    name: 'tempsHeures',
    description: 'tempsHeures',
    example: 1,
  })
  @Expose()
  tempsHeures: number;

  @ApiProperty({
    name: 'tempsMinutes',
    description: 'tempsMinutes',
    example: 1,
  })
  @Expose()
  tempsMinutes: number;

  @ApiProperty({
    name: 'description',
    description: 'description',
    example: 'description',
  })
  @Expose()
  @Type(() => String)
  description: string;

  @ApiProperty({
    name: 'idCategorie',
    description: 'idCategorie',
    example: '5763cd4dc378a38ecd387737',
  })
  @Expose()
  @Type(() => String)
  idCategorie: string;

  @ApiProperty({
    name: 'idType',
    description: 'idType',
    example: 1,
  })
  @Expose()
  idType: number;

  @ApiProperty({
    name: 'nbNotes',
    description: 'nbNotes',
    example: 1,
  })
  @Expose()
  nbNotes: number;

  @ApiProperty({
    name: 'noteTotal',
    description: 'noteTotal',
    example: 1,
  })
  @Expose()
  noteTotal: number;

  @ApiProperty({
    name: 'nbPortions',
    description: 'nbPortions',
    example: 1,
  })
  @Expose()
  nbPortions: number;

  @ApiProperty({
    name: 'commentaire',
    description: 'commentaire',
    example: 'commentaire',
  })
  @Expose()
  @Type(() => String)
  commentaire: string;

  @ApiProperty({
    name: 'niveauDifficulte',
    description: 'niveauDifficulte',
    example: 1,
  })
  @Expose()
  niveauDifficulte: number;

  @ApiProperty({ name: 'ingredient', description: 'ingredient' })
  @Expose()
  @Type(() => IngredientEntity)
  ingredient: IngredientEntity[];


  /**
   * Class constructor
   *
   * @param partial data to insert in object instance
   */
  constructor(partial: Partial<Recette>) {
    Object.assign(this, partial);
  }
}
