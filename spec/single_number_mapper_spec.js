const singleNumberMapper = require('../src/single_number_mapper');

describe('Single Number Mapper', () => {
    it('should return 1 when number is 1', function () {
        expect(singleNumberMapper(1)).toEqual(1);
    });
    it('should return Fizz when number is 3', function () {
        expect(singleNumberMapper(3)).toEqual('Fizz');
    });
    it('should return Buzz when number is 5', function () {
        expect(singleNumberMapper(5)).toEqual('Buzz');
    });
    it('should return Whizz when number is 7', function () {
        expect(singleNumberMapper(7)).toEqual('Whizz');
    });
    it('should return FizzBuzz when number is 15', function () {
        expect(singleNumberMapper(15)).toEqual('FizzBuzz');
    });
    it('should return FizzWhizz when number is 21', function () {
        expect(singleNumberMapper(21)).toEqual('FizzWhizz');
    });
    it('should return BuzzWhizz when number is 35', function () {
        expect(singleNumberMapper(35)).toEqual('BuzzWhizz');
    });
});