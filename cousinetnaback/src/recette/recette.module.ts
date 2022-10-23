import { Logger, Module } from '@nestjs/common';
import { RecetteController } from './recette.controller';
import { RecetteService } from './recette.service';
import { MongooseModule } from '@nestjs/mongoose';
import {Recette,RecetteSchema } from './schemas/recette.schema';
import { RecetteDao } from './dao/recette.dao';

@Module({
  imports: [
    MongooseModule.forFeature([{ name:Recette.name, schema:RecetteSchema }]),
  ],
  controllers: [RecetteController],
  providers: [RecetteService, Logger, RecetteDao],
})
export class RecetteModule {}
