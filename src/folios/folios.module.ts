import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Folio } from './entities/folio.entity';
import { FoliosService } from './services/folios.service';
import { FoliosController } from './controllers/folios.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Folio])
  ],
  providers: [FoliosService],
  controllers: [FoliosController]
})
export class FoliosModule {}
