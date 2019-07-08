import path from 'path';
import fs from 'fs';
import {TEXT} from "./text";

function createDoc() {
    const docPath = path.resolve().concat('/docs/API.md');
    const dirPath = path.dirname(docPath);

    if (fs.existsSync(dirPath)) {
        fs.writeFileSync(docPath, TEXT);
        return;
    }
    fs.mkdirSync(dirPath);
    fs.writeFileSync(docPath, TEXT);
}

createDoc();
