import { readFileSync, writeFileSync } from 'fs';
export class DB {
    readFile() {
        const data = JSON.parse(readFileSync('./testData/carsData.json').toString());
        return data
    }
    writeFile(value) {
        let data = JSON.stringify(value);
        writeFileSync('./testData/carsData.json', data);
    }
}