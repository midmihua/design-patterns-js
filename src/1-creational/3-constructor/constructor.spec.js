const { DatabaseFunction, DatabaseClass } = require('./constructor');

describe('Creational: Constructor', () => {

    const funcDb = new DatabaseFunction('localhost', 8070);
    const classDb = new DatabaseClass('localhost', 8080);

    test('should work', () => {
        expect(true).toBeTruthy();
        // console.log(funcDb.getUrl());
        // console.log(classDb.getUrl());
    });

    test('new instance via Function constructor', () => {
        expect(funcDb instanceof Object).toBeTruthy();
        expect(funcDb.getUrl()).toBe('https://localhost:8070');
    });

    test('new instance via Class constructor', () => {
        expect(classDb instanceof Object).toBeTruthy();
        expect(classDb instanceof DatabaseClass).toBeTruthy();
        expect(classDb.getUrl()).toBe('https://localhost:8080');
    });
});
