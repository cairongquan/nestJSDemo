import { Module } from '@nestjs/common';
import { ModuleDemoController } from './module-demo.controller';
import { ModuleDemoService } from './module-demo.service';

import { userinfo } from '../entities/userInfo.entity';
import { userinfoAddress } from '../entities/userInfoAddress.entity';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([userinfo, userinfoAddress])],
    controllers: [ModuleDemoController],
    providers: [ModuleDemoService]
})
export class ModuleDemoModule { }
