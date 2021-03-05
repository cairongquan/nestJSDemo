import { Controller, Delete, Get, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CarsService } from './cars.service';
import { resType, carType } from 'Interfaces/myInterface';
import { Response } from 'express'

// http://localhost:8087/cars/xxxx 路由

@Controller('cars')
export class CarsController { //导出控制器类
    constructor(private readonly carsService: CarsService) { //构造器 引入service层代码
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
    getAllCarsList(@Query('name') name: string): resType {
        if (!name) {
            return {
                msg: "数据出错",
                data: null,
                code: 505
            }
        }
        return this.carsService.getAllCars();
    }

    @Post('/creatCar') //创建车辆 {name,creatTime,color}
    creatCarData(@Query() data: carType): resType {
        return this.carsService.creatCar(data);
    }

    @Delete('/cleanCars') //清空所有车辆
    cleanCars(): resType {
        return this.carsService.cleanCarData();
    }

    @Get('/finOne') //查找车辆 {id}
    findOneCar(@Query() data: any): resType {
        return this.carsService.findOne(data.id);
    }
    @Delete('/delOne') //删除车辆 {id}
    delOneCar(@Query() data: any): resType {
        return this.carsService.delOne(data.id);
    }

    @Put('/editCar') //修改车辆 {name,creatTime,color,id}
    editCar(@Query() data: carType): resType {
        return this.carsService.editCar(data);
    }
}
