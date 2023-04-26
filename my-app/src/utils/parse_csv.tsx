import { parse } from 'csv-parse';
import * as path from "path";
import * as fs from "fs";

interface fields { 
    spanish: string
    english: string
    wordOrPhrase?: number
}

export function loadData(filePath: string): { records: fields[] } {
    const csvFilePath = path.resolve(__dirname, "..", filePath);
    console.log("filePath: ", csvFilePath)

    const records: fields[] = []
    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });
    console.log("fileContent: ", fileContent)

    const parser = parse({
        delimiter: '|'
    });

    parser.on('readable', function () {
        let record;
        while ((record = parser.read()) !== null) {
            console.log('record: ', record)
            records.push({"spanish":record[1].slice(1,-1),
             "english":record[2].slice(1,-1),
              "wordOrPhrase": record[3].slice(1,-1)});
        }
    });

    parser.write(fileContent)
    parser.end();
    return {records}
}
