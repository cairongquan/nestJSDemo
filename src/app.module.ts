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
import { connectConfig } from './connect/config'; //数据库连接配置
@Module({
  imports: [CarsModule, ModuleDemoModule, TypeOrmModule.forRoot(connectConfig)],
  controllers: [AppController, CarsController, ModuleDemoController],
  providers: [AppService, CarsService, ModuleDemoService],
})
export class AppModule { }
