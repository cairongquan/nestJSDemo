import { Injectable } from '@nestjs/common';
import { resType, carType } from 'Interfaces/myInterface'
import { DB } from '../db/db';
import randomString from 'string-random';

@Injectable()
export class CarsService {//导出服务层类
    db:any    
    constructor() {
        this.db = new DB();
    }

    carList: carType[] //汽车数据

    getAllCars(): resType { //获取所有车辆数据
        const data = this.db.readFile();
        return {
            msg: "数据获取成功",
            data,
            code: 200
        }
    }

    creatCar(value: carType): resType { //添加车辆
        value['id'] = randomString();
        let data = this.db.readFile();
        data.push(value);
        this.db.writeFile(data);
        return {
            msg: "数据导入成功",
            data,
            code: 200
        }
    }

    cleanCarData(): resType { //清空数据
        this.db.writeFile([]);
        return {
            msg: "数据清除成功",
            data: null,
            code: 200
        }
    }

    findOne(id: string): resType { // 查找车辆
        let data = this.db.readFile();
        let index = data.findIndex(item => item.id == id);
        if (index != -1) {
            return {
                msg: "查找数据成功",
                data: data[index],
                code: 200
            }
        }
        return {
            msg: "数据查询失败,请检查id",
            data: null,
            code: 400
        }
    }

    delOne(id: string): resType {
        let data = this.db.readFile();
        let index = data.findIndex(item => item.id == id);
        if (index == -1) {
            return {
                msg: "删除数据失败,请检查id",
                data: null,
                code: 400
            }
        }
        data.splice(index, 1);
        this.db.writeFile(data);
        return {
            msg: "删除数据成功",
            data: null,
            code: 200
        }
    }

    editCar(value: carType): resType {
        let data = this.db.readFile();
        data[data.findIndex(item => item.id = value.id)] = value;
        this.db.writeFile(data);
        return {
            msg: "数据修改成功",
            code: 200,
            data
        }
    }
}
