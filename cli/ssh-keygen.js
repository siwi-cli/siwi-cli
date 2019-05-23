/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-05-23 15:37:17
 * @modify date 2019-05-23 15:37:17
 * @desc [description]
 */
module.exports = function sshKeyGen(email) {
    const { spawn } = require('child_process')
    
    //ssh-keygen -t rsa -C "email@email.com"
    const ls = spawn('ssh-keygen', ['-t', 'rsa', '-C', email])

    ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    ls.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    });

    ls.on('close', (code) => {
        console.log(`子进程退出码：${code}`);
    });
}