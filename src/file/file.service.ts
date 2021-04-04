import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { fileData } from '../entities/file.entity';

@Injectable()
export class FileService {
    constructor(
        @InjectRepository(fileData) private readonly fileData: Repository<fileData>
    ) { }
}
