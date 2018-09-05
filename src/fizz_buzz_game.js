const singleNumberMapper = require('../src/single_number_mapper');

const fizzBuzz = (count) => {
    if (count < 0) {
        return "Input number is invalid!";
    }
    let gameResult = [];
    for (let i = 1; i <= count; i++) {
        gameResult.push(singleNumberMapper(i));
    }
    return gameResult;
}


module.exports = fizzBuzz;