const fs = require('fs');
const path = require('path');

function readAllHtml(pathDir) {
    let entrys = [];
    fs.readdirSync(pathDir).filter(file=>{
        return fs.lstatSync(path.join(pathDir, file)).isDirectory();
    }).map(file=>{
        let baseDir = path.join(pathDir, file);
        let pageDir = path.join(baseDir, './pages');
        let htmls = fs.readdirSync(pageDir).map(filename=>{
            // let rets = path.join(pageDir, filename);
            return {baseDir, filename: filename.substring(0, filename.length - 5), dir: file};
        });
        entrys = entrys.concat(htmls);
    });
    return entrys;
}

function getWidget(pathDir) {
    let widgets = [];
    fs.readdirSync(pathDir).filter(file=>{
        return fs.lstatSync(path.join(pathDir, file)).isDirectory();
    }).map(dir=>{
        let baseDir = path.join(pathDir, dir);
        fs.readdirSync(baseDir).forEach(filename=>{
            if (filename.endsWith('html')) {
                widgets.push(
                    {name: filename, dir, baseDir}
                );
            }
        });
    });
    return widgets;
}

function getEntry(pathDir) {
    let entrys = {};
    let fileMaps = readAllHtml(pathDir);
    fileMaps.forEach(fileMap=>{
        let scriptName = path.join(fileMap.baseDir, `scripts/${fileMap.filename}.js`);
        if (fs.existsSync(scriptName)) {
            entrys[fileMap.filename] = scriptName;
        }
    });
    return entrys;
}

module.exports = {
    getEntry,
    getWidget,
    readAllHtml
};