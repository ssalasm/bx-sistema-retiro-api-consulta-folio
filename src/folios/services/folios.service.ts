import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Folio } from '../entities/folio.entity';

@Injectable()
export class FoliosService {

    constructor(
        @InjectRepository(Folio) private foliosRepo: Repository<Folio>,
    ) {}

    findAll() {
        // return this.foliosRepo.find();
        return this.foliosRepo.query('');
    }

    async generarNumeroPickup(): Promise<any> {
        const folio = await this.foliosRepo.query('');
        return folio;
    }

}
