import { Module } from '@nestjs/common';
import { ModuleDemoController } from './module-demo.controller';
import { ModuleDemoService } from './module-demo.service';

@Module({
    controllers: [ModuleDemoController],
    providers: [ModuleDemoService]
})
export class ModuleDemoModule { }
