const { MyCalculator } = require('./chain-of-responsibility');

describe('Behavioral: chain of responsibility', () => {

    let calc0;
    let calc10;

    beforeAll(() => {
        calc0 = new MyCalculator();
        calc10 = new MyCalculator(10);
    });

    test('should add several values in line', () => {
        expect(calc0.add(1).add(2).add(3).result).toBe(6);
    });

    test('should sub several values in line', () => {
        expect(calc10.sub(1).sub(2).result).toBe(7);
    });
});