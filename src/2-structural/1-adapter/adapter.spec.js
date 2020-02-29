const { OldCalc, NewCalc, Adapter } = require('./adapter');

describe('Structural: Adapter', () => {

    test('OldCalc should work', () => {
        expect(OldCalc(1, 2, '+')).toBe(3);
        expect(OldCalc(1, 2, '-')).toBe(-1);
    });

    test('NewCalc should work', () => {
        expect(NewCalc().add(1, 2)).toBe(3);
        expect(NewCalc().sub(1, 2)).toBe(-1);
    });

    test('Adapter should work', () => {
        expect(Adapter().OldCalc(1, 2, '+')).toBe(3);
        expect(Adapter().OldCalc(1, 2, '-')).toBe(-1);
    });
});
