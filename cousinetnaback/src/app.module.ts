import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HelloModule } from './hello/hello.module';
import { PeopleModule } from './people/people.module';
import * as Config from 'config';
import { RecetteModule } from './recette/recette.module';

@Module({
  imports: [
    HelloModule,
    PeopleModule,
    RecetteModule,
    MongooseModule.forRoot(Config.get<string>('mongodb.uri')),
  ],
})
export class AppModule {}
