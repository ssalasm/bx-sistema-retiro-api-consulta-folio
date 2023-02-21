import { Module } from '@nestjs/common';
import { FoliosService } from './services/folios.service';
import { FoliosController } from './controllers/folios.controller';

@Module({
  providers: [FoliosService],
  controllers: [FoliosController]
})
export class FoliosModule {}
