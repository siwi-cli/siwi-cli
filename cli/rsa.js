/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-05-23 17:16:12
 * @modify date 2019-05-23 17:16:12
 * @desc [rsa]
 */

 (async () => {
    const readline = require('readline')
    const { spawn } = require('child_process')

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    const type = await new Promise((resolve, reject) => {
        rl.question('请输入rsa类型 默认2048 请输入：', (t) => {
            const type = t? t: '2048'
            resolve(type)
        })
    })
    rl.close()

    const ls = spawn('openssl', ['genrsa', '-out', 'private.pem', type], {cwd: process.cwd()})
    ls.stdout.on('data', (data) => {
        console.log(`${data}`)
    })
    ls.stderr.on('data', (data) => {
        console.log(`${data}`)
    })
    ls.on('close', code => {
        if (code == 0) {
            spawn('openssl', ['rsa', '-in', 'private.pem', '-pubout', '-out', 'public.pem'], {cwd: process.cwd()})
        }
    })
 })()