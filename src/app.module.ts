// 根模块
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CarsController } from './cars/cars.controller';
import { CarsService } from './cars/cars.service';
import { CarsModule } from './cars/cars.module';

import { ModuleDemoController } from './module-demo/module-demo.controller';
import { ModuleDemoService } from './module-demo/module-demo.service';
import { ModuleDemoModule } from './module-demo/module-demo.module';

// typeORM 连接数据库
import { TypeOrmModule } from '@nestjs/typeorm';
import { connectConfig } from './config'; //数据库连接配置

import { fileData } from './entities/file.entity';
import { userinfo } from './entities/userInfo.entity';
import { userinfoAddress } from './entities/userInfoAddress.entity';
import { artList } from './entities/art.entity';

import { FileController } from './file/file.controller';
import { FileService } from './file/file.service';
import { FileModule } from './file/file.module';
import { ArtListModule } from './art-list/art-list.module';

const ENTITIES = [ //表映射模型文件
  userinfo,
  userinfoAddress,
  fileData,
  artList
]

// TypeOrmModule.forRoot链接数据库
@Module({
  imports: [CarsModule, ModuleDemoModule, TypeOrmModule.forRoot(connectConfig), TypeOrmModule.forFeature([...ENTITIES]), FileModule, ArtListModule],
  controllers: [AppController, CarsController, ModuleDemoController, FileController],
  providers: [AppService, CarsService, ModuleDemoService, FileService],
})
export class AppModule { }
