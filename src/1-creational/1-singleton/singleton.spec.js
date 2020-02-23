const Singleton = require('./singleton');

describe('Creational: Singleton', () => {

    const instance1 = new Singleton({ title: 'instance 1' });
    const instance2 = new Singleton({ title: 'instance 2' });

    test('should work', () => {
        expect(true).toBeTruthy();
        console.log(instance1.getArgs());
        console.log(instance2.getArgs());
    });

    test('should be one instance only', () => {
        expect(instance1 === instance2).toBeTruthy();
    });

    test('should return the same args object', () => {
        expect(instance1.getArgs()).toEqual(instance2.getArgs());
    });
});
