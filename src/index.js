module.exports = function toReadable (number) {
    const dict_1 = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ]
    const dict_2 = [
        '',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ]
    let res = [];
    const temp = []
    if (number === 0) temp.push(number)
    while (number !== 0) {
        temp.unshift(number % 10)
        number = Math.floor(number / 10)
    }
    if (temp.length === 1) {
        res.push(dict_1[temp[0]])
    }
    if (temp.length === 2) {
        if(temp[0]===1 && temp[1]===0)
            res.push(dict_1[temp[0] * 10 + temp[1]])
        if (temp[0] !== 0 && temp[0] !== 1)
            res.push(dict_2[temp[0] - 1])
        if (temp[0] === 1 && temp[1]!==0) {
            res.push(dict_1[temp[0] * 10 + temp[1]])
        } else {
            if (temp[1] !== 0)
                res.push(dict_1[temp[1]])
        }
    }
    if (temp.length === 3) {
        res.push(dict_1[temp[0]])
        res.push('hundred')
        if(temp[1]===1 && temp[2]===0)
            res.push(dict_1[temp[1] * 10 + temp[2]])
        if (temp[1] !== 0 && temp[1] !== 1)
            res.push(dict_2[temp[1] - 1])
        if (temp[1] === 1 && temp[2]!==0) {
            res.push(dict_1[temp[1] * 10 + temp[2]])
        } else {
            if (temp[2] !== 0)
                res.push(dict_1[temp[2]])
        }
    }
    return res.join(' ')
}
