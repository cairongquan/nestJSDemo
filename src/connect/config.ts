import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const connectConfig: TypeOrmModuleOptions = {
    type: 'mysql', //数据库类型
    host: '114.55.86.230', //数据库连接地址
    port: 3306, //数据库端口号
    username: 'root', //数据库登账户
    password: '123qwe!@#', //数据库登录密码
    database: 'cai_demo_test', //链接数据库名称
    timezone: 'UTC', //时区
    charset: 'utf8',//编码集
    entities: ["src/**/**.entity{.ts,.js}"], //实体文件类型
    synchronize: true,//是否同步
    logging: true,//是否显示日志
}