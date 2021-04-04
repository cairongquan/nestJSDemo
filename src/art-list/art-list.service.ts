import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm'
import { artList } from '../entities/art.entity';
import { Repository } from 'typeorm';
@Injectable()
export class ArtListService {
    constructor(
        @InjectRepository(artList) private readonly art: Repository<artList>
    ) { }
    num: number = 3;

    async getData(): Promise<Object> {
        let res = await this.art.find();
        return {
            data: res
        }
    }

    async creatArt(data): Promise<Object> {
        data['artId'] = this.num++;
        let res = await this.art.save(data);
        return {
            code: 200,
            msg: "创建数据成功",
            data: res
        }
    }
}
