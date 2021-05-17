const fs = require('fs');
const path = require('path');
const { DateTime } = require("luxon");

const dt = DateTime.now();

// const newdir = fs.mkdir(path.join(__dirname, `${dt}`), (err) => {
//     if (err) throw err;
//     console.log('created dir');
// })

const formatting = dt.year.toString() + dt.month.toString() + dt.day.toString() + "-" + dt.hour.toString() + dt.minute.toString();

const pathToFile = path.join(__dirname, "/../ONLINEORDER.LOG");
const pathToNewFile = path.join(__dirname, '/../OLOLOGS', `OLO-${formatting}.LOG`);

if (!fs.existsSync(path.join(__dirname, '/../OLOLOGS'))) {
    fs.mkdir(path.join(__dirname, '/../OLOLOGS'), (err) => {
        if (err) throw err;
        console.log(pathToFile)
        fs.copyFile(pathToFile, pathToNewFile, (err) => {
            if (err) throw err;
            console.log('copied');
        })
    })
} else {
    fs.copyFile(pathToFile, pathToNewFile, (err) => {
        if (err) throw err;
        console.log('copied');
    })
}