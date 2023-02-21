import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { FoliosService } from '../services/folios.service';

@Controller('api/folios')
export class FoliosController {

    constructor(
        private foliosService: FoliosService
    ){}

    @Get()
    findAll() {
        return this.foliosService.findAll();
    }

    @Get('generar')
    async generarNumeroPickup(): Promise<any> {
        const folio = await this.foliosService.generarNumeroPickup();
        const filteredData = folio.map(folio => folio.o_pickup_seq);
        return filteredData;
    }

}
