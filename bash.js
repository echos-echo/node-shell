const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    const cmdArr = cmd.split(' ');

    if(cmdArr[0] === 'pwd') {
        pwd.pwd();
    } else if (cmdArr[0] === 'ls'){
        ls.ls();
    } else if (cmdArr[0] === 'cat'){
        cat.cat(cmdArr[1]);
        // some function goes here
        // cat(cmdArr[1]) -> cmdArr should be the filename to be read
    }
});
