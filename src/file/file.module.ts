import { Module } from '@nestjs/common';
import { from } from 'rxjs';
import { FileController } from './file.controller'
import { FileService } from './file.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { fileData } from '../entities/file.entity';

@Module({
    imports: [TypeOrmModule.forFeature([fileData])],
    providers: [FileService],
    controllers: [FileController]
})
export class FileModule { }
