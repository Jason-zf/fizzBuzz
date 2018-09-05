const singleNumberMapper = (singleNumber) => {
    let res = singleNumberMapToFizz(singleNumber) + singleNumberMapToBuzz(singleNumber) + singleNumberMapToWhizz(singleNumber);
    return  res === '' ? singleNumber : res;
}

const singleNumberMapToFizz = (number) => {
    return number % 3 === 0 ? 'Fizz' : '';
}

const singleNumberMapToBuzz = (number) => {
    return number % 5 === 0 ? 'Buzz' : '';
}

const singleNumberMapToWhizz = (number) => {
    return number % 7 === 0 ? 'Whizz' : '';
}

module.exports = singleNumberMapper;