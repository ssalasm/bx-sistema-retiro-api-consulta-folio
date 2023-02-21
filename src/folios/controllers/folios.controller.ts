import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('api/folios')
export class FoliosController {

    @Get()
    findAll() {
        return [1, 2, 3]
    }

}
