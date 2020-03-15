const { MyIterator, generator } = require('./iterator');

describe('Behavioral: iterator', () => {

    const iter = new MyIterator(['it', 'is', 'a', 'custom', 'iterator']);
    const gen = generator(['it', 'is', 'a', 'custom', 'iterator']);

    test('should iterate through the array', () => {
        for (const el of iter) {
            // console.log(`value: ${el}`);
            expect(typeof el === 'string').toBeTruthy();
        }
    });

    test('should generate through the array', () => {
        expect(gen.next().value).toBe('it');
        expect(gen.next().value).toBe('is');
        expect(gen.next().value).toBe('a');
        expect(gen.next().value).toBe('custom');
        expect(gen.next().value).toBe('iterator');
        expect(gen.next().value).toBeUndefined();
    });
});
