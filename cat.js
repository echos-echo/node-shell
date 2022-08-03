const fs = require('fs');

const cat = fileName => {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if(err) throw err;
        console.log(data);
        process.stdout.write('\nprompt > ');
    });

}

module.exports.cat = cat;