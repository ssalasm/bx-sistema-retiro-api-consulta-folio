import { Module } from '@nestjs/common';
import { FoliosService } from './folios/services/folios.service';
import { FoliosModule } from './folios/folios.module';

@Module({
  imports: [FoliosModule],
  controllers: [],
  providers: [FoliosService],
})
export class AppModule {}
