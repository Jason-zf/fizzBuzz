const singleNumberMapper = require('../src/single_number_mapper');

describe('Single Number Mapper', () => {
    it('should return Fizz when number is 3', function () {
        expect(singleNumberMapper(3)).toEqual('Fizz');
    });
    it('should return Buzz when number is 5', function () {
        expect(singleNumberMapper(5)).toEqual('Buzz');
    });
    it('should return Whizz when number is 7', function () {
        expect(singleNumberMapper(7)).toEqual('Whizz');
    });
});