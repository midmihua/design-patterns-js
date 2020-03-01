const { PersonFactory } = require('./flyweight');

describe('Structural: Flyweight', () => {

    const factory = new PersonFactory();

    const jerry = factory.init('Jerry', 31);
    const tom1 = factory.init('Tom', 35);
    const tom2 = factory.init('Tom', 37);

    test('should return person Jerry', () => {
        expect(jerry).toHaveProperty('name');
        expect(jerry.name).toBe('Jerry');
        expect(jerry).toHaveProperty('age');
        expect(jerry.age).toBe(31);
    });

    test('should return person Tom', () => {
        expect(tom1).toHaveProperty('name');
        expect(tom1.name).toBe('Tom');
        expect(tom1).toHaveProperty('age');
        expect(tom1.age).toBe(35);
    });

    test('should be the same person', () => {
        expect(tom2).toHaveProperty('name');
        expect(tom2.name).toBe('Tom');
        expect(tom2).toHaveProperty('age');
        expect(tom2.age).toBe(35);
        expect(tom2 === tom1).toBeTruthy();
    });
});
