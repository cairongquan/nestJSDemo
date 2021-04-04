export class Handle {
    success(data: any) {
        return {
            msg: "获取数据成功",
            data,
            code: 200,
            sendTime: new Date()
        }
    }

    error() {
        return {
            msg: "获取数据失败",
            code: 400,
            sendTime: new Date()
        }
    }

}