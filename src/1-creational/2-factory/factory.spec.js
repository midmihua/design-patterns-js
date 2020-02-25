const { Factory } = require('./factory');

describe('Creational: Factory', () => {

    const employees = [];
    const factory = new Factory();

    employees.push(factory.createInstance('FullTime'));
    employees.push(factory.createInstance('PartTime'));
    employees.push(factory.createInstance('Temporary'));

    test('should work', () => {
        expect(true).toBeTruthy();
    });

    test('should return instances', () => {
        expect(employees.length).toBe(3);
        employees.forEach(emp => {
            expect(emp instanceof Object);
        });
    });

    test('should return rate for FullTime', () => {
        expect(employees[0].getRate()).toBe('$12');
    });

    test('should return rate for PartTime', () => {
        expect(employees[1].getRate()).toBe('$10');
    });

    test('should return rate for Temporary', () => {
        expect(employees[2].getRate()).toBe('$8');
    });
});
