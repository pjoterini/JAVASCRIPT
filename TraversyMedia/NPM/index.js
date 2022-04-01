const _ = require('lodash')

const numbers = [2313,3,2,13,21,321,31,3]

_.each(numbers, function(number, i) {
    console.log(number)
})

