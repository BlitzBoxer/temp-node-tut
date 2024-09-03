const path = require('path')

console.log(path.sep);

const filePath = path.join('/content/','subfolder','test.txt');
console.log(filePath);

// getting the text in file
const base = path.basename(filePath);
console.log(base);

// getting the whole directory
const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);

