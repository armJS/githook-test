import path from 'path';
import fs from 'fs';
import {TEXT} from "./text";

function createDoc() {
    const docPath = path.resolve().concat('src/docs/API.md');
    const dirPath = path.dirname(docPath);
    console.log(path.resolve());
    console.log(TEXT);
    if (fs.existsSync(dirPath)) {
        fs.writeFileSync(docPath, TEXT);
        return;
    }
    fs.mkdirSync(dirPath);
    fs.writeFileSync(docPath, TEXT);
}

createDoc();
