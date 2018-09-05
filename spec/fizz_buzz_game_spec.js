let fizzBuzz = require('../src/fizz_buzz_game');

describe('FizzBuzz', () => {
    it('should return Input number is invalid when input -1', function () {
        expect(fizzBuzz(-1)).toEqual('Input number is invalid!');
    });
    it('should return 1 when input 1', function () {
        expect(fizzBuzz(1)).toEqual([1]);
    });
});