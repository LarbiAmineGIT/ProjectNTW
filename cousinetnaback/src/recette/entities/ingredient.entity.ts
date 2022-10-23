import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

@Exclude()
export class IngredientEntity {
  @ApiProperty({
    name: 'idIngredient',
    description: 'idIngredient',
    example: '5763cd4dc378a38ecd387737',
  })
  @Expose()
  idIngredient: string;

  @ApiProperty({
    name: 'quantite',
    description: 'quantite',
    example: 1,
  })
  @Expose()
  quantite: number;
}
