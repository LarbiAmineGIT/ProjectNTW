import {
  IsBoolean,
  IsEmail,
  IsInstance,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IngredientDto } from './ingredient.dto';

export class UpdateRecetteDto {

    @ApiProperty({
        name: 'id',
        description: 'Unique identifier in the database',
        example: '5763cd4dc378a38ecd387737',
      })
      @IsNotEmpty()
      @IsString()
      id: string;
    
      @ApiProperty({
        name: 'photo',
        description: 'Photo URL',
        example: 'https://randomuser.me/portraits/men/55.jpg',
      })
      @IsNotEmpty()
      @IsString()
      photo: string;
    
      @ApiProperty({
        name: 'nom',
        description: 'Name',
        example: 'Recette1',
      })
      @IsNotEmpty()
      @IsString()
      nom: string;
    
      @ApiProperty({
        name: 'tempsHeures',
        description: 'tempsHeures',
        example: 1,
      })
      @IsNotEmpty()
      @IsNumber()
      tempsHeures: number;
    
      @ApiProperty({
        name: 'tempsMinutes',
        description: 'tempsMinutes',
        example: 1,
      })
      @IsNotEmpty()
      @IsNumber()
      tempsMinutes: number;
    
      @ApiProperty({
        name: 'description',
        description: 'description',
        example: 'description',
      })
      @IsNotEmpty()
      @IsString()
      description: string;
    
      @ApiProperty({
        name: 'idCategorie',
        description: 'idCategorie',
        example: '5763cd4dc378a38ecd387737',
      })
      @IsNotEmpty()
      @IsString()
      idCategorie: string;
    
      @ApiProperty({
        name: 'idType',
        description: 'idType',
        example: 1,
      })
      @IsNotEmpty()
      @IsNumber()
      idType: number;
    
      @ApiProperty({
        name: 'nbNotes',
        description: 'nbNotes',
        example: 1,
      })
      @IsNotEmpty()
      @IsNumber()
      nbNotes: number;
    
      @ApiProperty({
        name: 'noteTotal',
        description: 'noteTotal',
        example: 1,
      })
      @IsNotEmpty()
      @IsNumber()
      noteTotal: number;
    
      @ApiProperty({
        name: 'nbPortions',
        description: 'nbPortions',
        example: 1,
      })
      @IsNotEmpty()
      @IsNumber()
      nbPortions: number;
    
      @ApiProperty({
        name: 'commentaire',
        description: 'commentaire',
        example: 'commentaire',
      })
      @IsNotEmpty()
      @IsString()
      commentaire: string;
    
      @ApiProperty({
        name: 'niveauDifficulte',
        description: 'niveauDifficulte',
        example: 1,
      })
      @IsNotEmpty()
      @IsNumber()
      niveauDifficulte: number;

    



}