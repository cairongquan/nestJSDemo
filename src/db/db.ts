import { readFileSync, writeFileSync } from 'fs';
export class DB {
    readFile() {
        const data:object = JSON.parse(readFileSync('./testData/carsData.json').toString());
        return data
    }
    writeFile(value:object) {
        let data = JSON.stringify(value);
        writeFileSync('./testData/carsData.json', data);
    }
}