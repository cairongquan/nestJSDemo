import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { userinfo } from '../entities/userInfo.entity';
import { userinfoAddress } from '../entities/userInfoAddress.entity';

import { userType } from './interfaces/user.interface';

import { Handle } from '../handleMethods/handle';
@Injectable()
export class ModuleDemoService {
    constructor(
        @InjectRepository(userinfo)
        private readonly userInfo: Repository<userinfo>,
        @InjectRepository(userinfoAddress)
        private readonly userAddress: Repository<userinfoAddress>,
    ) {
        this.Handle = new Handle();
    }

    Handle: Handle

    async creatUser(value: userinfo): Promise<userinfo> {
        let data = await this.userInfo.save(value);
        return data;
    }

    async findOne(id: number) {
        let data = await this.userInfo.findOne({
            id
        })
        return data;
    }

    async findAllUsers() {
        let data = await this.userInfo.find();
        return data;
    }

    async delOne(id: number) {
        let data = await this.userInfo.delete({
            id
        })
        return data;
    }

    async editOne(id: number) {
        let data = await this.userInfo.update({ id }, {
            name: "华龙",
            sex: '女'
        })
        return data;
    }

    async delAll() {
        let data = await this.userInfo.clear();
        console.log(data)
    }

    async creatAddress(data: userinfoAddress) {
        let value = await this.userAddress.save(data);
        return value;
    }

    async findAddress(id: number) {
        let data = await this.userInfo.query(`SELECT * FROM userinfo,userinfo_address WHERE userinfo.id = userinfo_address.userId AND userinfo.id=${id} `);
        return this.Handle.success(data);
    }

}
