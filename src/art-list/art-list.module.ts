import { Module } from '@nestjs/common';
import { ArtListService } from './art-list.service';
import { ArtListController } from './art-list.controller';
import { artList } from '../entities/art.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([artList])],
  providers: [ArtListService],
  controllers: [ArtListController]
})
export class ArtListModule { }
