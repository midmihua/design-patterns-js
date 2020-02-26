const { protoObject, childObject } = require('./prototype');

describe('Creational: Prototype', () => {

    test('should be instance of Object', () => {
        expect(protoObject instanceof Object).toBeTruthy();
        expect(childObject instanceof Object).toBeTruthy();
    });

    test('should __proto__ be equal to protoObject', () => {
        expect(childObject.__proto__ === protoObject).toBeTruthy();
    });

    test('should inherit proto methods', () => {
        const spy = jest.spyOn(childObject, 'init');
        const result = childObject.init();
        expect(spy).toHaveBeenCalled();
        expect(result).toBeTruthy();
        spy.mockRestore();
    });
});