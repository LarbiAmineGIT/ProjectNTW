import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class IngredientDto {

    @ApiProperty({
        name: 'idIngredient',
        description: 'idIngredient',
        example: '5763cd4dc378a38ecd387737',
    })
    @IsNotEmpty()
    @IsString()
    idIngredient: string;
    
    @ApiProperty({
        name: 'quantite',
        description: 'quantite',
        example: 1,
    })
    @IsNotEmpty()
    @IsNumber()
    quantite: number;
}