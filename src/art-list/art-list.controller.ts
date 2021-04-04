import { Controller, Get, Post, Query } from '@nestjs/common';
import { ArtListService } from './art-list.service';

@Controller('artList')
export class ArtListController {
    constructor(private readonly artService: ArtListService) {

    }

    @Get('/')
    getArtList() {
        return this.artService.getData();
    }

    @Post('/')
    createArt(@Query() data:Object) {
        return this.artService.creatArt(data);
    }
}
