import { Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { ModuleDemoService } from './module-demo.service';
import { userType } from './interfaces/user.interface';


@Controller('moduleDemo')
export class ModuleDemoController {
    constructor(private readonly moduleDemoServe: ModuleDemoService) { }

    @Post('creatUser')
    creatUser(@Query() data: userType) {
        return this.moduleDemoServe.creatUser(data);
    }

    @Get()
    findOnePerson(@Query('id') id: number) {
        return this.moduleDemoServe.findOne(id);
    }

    @Get('/findAll')
    findAll() {
        return this.moduleDemoServe.findAllUsers();
    }

    @Delete()
    delOne(@Query('id') id: number) {
        return this.moduleDemoServe.delOne(id)
    }

    @Put()
    editOne(@Query('id') id: number) {
        return this.moduleDemoServe.editOne(id);
    }

    @Delete('/delAll')
    delAll() {
        return this.moduleDemoServe.delAll();
    }


    @Post('/createAddress')
    createAddress(@Query() data: any) {
        return this.moduleDemoServe.creatAddress(data);
    }

    @Get('/findInfo')
    getAll(@Query('id') id: number) {
        return this.moduleDemoServe.findAddress(id);
    }
}

