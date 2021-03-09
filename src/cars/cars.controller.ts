// cars 控制层 用来处理数据以及返回数据

import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Query } from '@nestjs/common';
import { CarsService } from './cars.service';
import { resType, carType } from 'Interfaces/myInterface';

// http://localhost:8087/cars/xxxx 路由

@Controller('cars')
export class CarsController { //导出控制器类
    // @Inject 装饰器  其参数放入被注入的类的类名

    constructor(@Inject(CarsService) private readonly carsService: CarsService) { //构造器 引入service层代码
    }

    // 动态路由
    /*
        例如 http://localhost:8087/cars/tran/1  params = {id:1}
        例如 http://localhost:8087/cars/tran/2  params = {id:2}
    */
    @Get('/tran/:id') //动态路由
    tranRouter(@Param('id') id: number) {
        console.log(id);
        return id;
    }

    // {key:1}
    // @Query('key') 将key属性的值提取出来 
    @Get('/getCarsList') //查看所有车辆列表
    getAllCarsList(): resType {
        return this.carsService.getAllCars();
    }

    @Post('/creatCar') //创建车辆 {name,creatTime,color}
    creatCarData(@Body() data: carType): resType {
        return this.carsService.creatCar(data);
    }

    @Delete('/cleanCars') //清空所有车辆
    cleanCars(): resType {
        return this.carsService.cleanCarData();
    }

    @Get('/finOne') //查找车辆 {id}
    findOneCar(@Query('id') id: string): resType {
        return this.carsService.findOne(id);
    }

    @Delete('/delOne') //删除车辆 {id}
    delOneCar(@Query('id') id: string): resType {
        return this.carsService.delOne(id);
    }

    @Put('/editCar') //修改车辆 {name,creatTime,color,id}
    editCar(@Query() data: carType): resType {
        return this.carsService.editCar(data);
    }
}
