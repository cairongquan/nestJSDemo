import { Injectable } from '@nestjs/common'; //服务层

@Injectable()
export class AppService {
  getHello(): string {
    return '服务器开启成功在8087端口';
  }
}
