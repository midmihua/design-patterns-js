const { EmployeeFactory, VendorFactory } = require('./abstractFactory');

describe('Creational: Abstract Factory', () => {

    const empFactory = new EmployeeFactory();
    const venFactory = new VendorFactory();
    const results = [];

    results.push(empFactory.create('emp 1'));
    results.push(empFactory.create('emp 2'));
    results.push(venFactory.create('ven 1'));
    results.push(venFactory.create('ven 2'));

    test('should work', () => {
        expect(true).toBeTruthy();
    });

    test('should return instances', () => {
        expect(results.length).toBe(4);
        results.forEach(item => {
            expect(item instanceof Object);
        });
    });

    test('should create new Employee', () => {
        expect(results[0].getEmployeeName()).toBe('emp 1');
        expect(results[1].getEmployeeName()).toBe('emp 2');
    });

    test('should create new Vendor', () => {
        expect(results[2].getVendorName()).toBe('ven 1');
        expect(results[3].getVendorName()).toBe('ven 2');
    });
});
