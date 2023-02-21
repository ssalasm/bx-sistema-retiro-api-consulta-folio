import { Module } from '@nestjs/common';
import { FoliosModule } from './folios/folios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Folio } from './folios/entities/folio.entity';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      //url: process.env.POSTGRES_URL,
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT, 4),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Folio],
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 10,
    }),    
    FoliosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
