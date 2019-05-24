/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-05-24 10:13:24
 * @modify date 2019-05-24 10:13:24
 * @desc [time.js] 
 */
module.exports = function time(args) {
    if (args.length == 0) {
        const now = Date.now()
        const timestamp = Math.round(Date.now() / 1000)

        const data = [
            { title: 'date', value: new Date(), function: 'new Date()' },
            { title: 'now', value: now, function: 'Date.now()' },
            { title: 'timestamp', value: timestamp, function: ' Math.round(Date.now() / 1000)' },
        ]
        console.table(data)
    } else {
        if (isNumber(args[0])) {
            let num = args[0]
            const now_len = Date.now().toString().length
            const num_len = num.toString().length
            if (now_len - num_len == 3) {
                num *= 1000
            }
            num = parseInt(num)
            const data = [
                { title: 'date', param: num, function: 'new Date()', value: new Date(num), 'desc': 'ms to date'}
            ]
            console.table(data)
        } else {
            try {
                const date = args[0];
                const data = [
                    { title: 'timestamp', param: date, function: 'Date.parse()', value: Date.parse(date), 'desc': 'date to timestamp'}
                ]
                console.table(data)
            } catch (error) {
                console.table([
                    {title: 'timestamp', param: args[0], 'function': 'Date.parse()', 'desc': error.message}
                ])
            }
            
        }
    }
}

function isNumber(num) {
    if (typeof num === 'number') {
        return num - num === 0;
    }
    if (typeof num === 'string' && num.trim() !== '') {
        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
    }
    return false;
};