const fs = require('fs');
const path = require('path');
const insertLine = require('insert-line')
const { isBinary } = require('istextorbinary');
function scanAndgen(dirname) {
    const dirents = fs.readdirSync(dirname, { withFileTypes: true })
    const dirs = dirents.filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);
    const direntsName = dirents.map(dirent => dirent.name);
    const files = dirents.filter(dirent => dirent.isFile()).map(dirent => dirent.name);
    for (const dir of dirs) {
        scanAndgen(path.resolve(dirname, dir))
    }
    for (const file of files) {
        const oldPath = path.resolve(dirname, file);
        const extname = path.extname(file);
        if (isBinary(oldPath, fs.readFileSync(oldPath))) {
            continue;
        }
        switch (extname) {
            case '.md':
            case '.svg':
                break;
            case '.proto':
                insertLine(oldPath).prependSync(`> ${file}\n\n\`\`\`protobuf`);
                insertLine(oldPath).appendSync('```');
                fs.renameSync(oldPath, path.resolve(dirname, file + '.md'));
                break;
            default:
                insertLine(oldPath).prependSync(`> ${file}\n\n\`\`\`${extname.substring(1)}`);
                insertLine(oldPath).appendSync('```');
                fs.renameSync(oldPath, path.resolve(dirname, file + '.md'));
                break;
        }
    }
    let content = "";
    if (direntsName.includes('readme.md')) {
        const mdPath = path.resolve(dirname, 'readme.md');
        content = fs.readFileSync(mdPath, { encoding: 'utf-8' }) + '\n\n';
        fs.unlinkSync(mdPath);
    }

    content += direntsName
        .filter(name => name !== 'readme.md')
        .map(file =>
            `[${path.basename(file)}](${file})`
        ).join('\n\n');

    try {
        fs.writeFileSync(path.resolve(dirname, 'README.md'), content)
    } catch (err) {
        console.error(err)
    }

}
const dirs = fs.readdirSync(__dirname, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(name => name !== 'node_modules' && name !== '.vuepress' && name !== '.git');

for (const dir of dirs) {
    scanAndgen(path.resolve(__dirname, dir))
}