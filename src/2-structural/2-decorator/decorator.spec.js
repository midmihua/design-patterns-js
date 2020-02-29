const { User, info, extra } = require('./decorator');

describe('Structural: Decorator', () => {

    const options = { city: 'Sumy' };
    const baseUser = new User('Tom', 35);
    const infoUser = info(new User('Tom', 35));
    const extraUser = extra(new User('Tom', 35), options);
    const fullUser = extra(info(new User('Tom', 35)), options);

    test('should have basic params', () => {
        expect(baseUser.name).toBe('Tom');
        expect(baseUser.age).toBe(35);
        expect(baseUser).not.toHaveProperty('info');
        expect(baseUser).not.toHaveProperty('extra');
    });

    test('user with info decorator', () => {
        expect(infoUser.name).toBe('Tom');
        expect(infoUser.age).toBe(35);
        expect(infoUser).toHaveProperty('info');
        expect(infoUser.info()).toBe('Tom is 35 years old');
        expect(infoUser).not.toHaveProperty('extra');
    });

    test('user with extra decorator', () => {
        expect(extraUser.name).toBe('Tom');
        expect(extraUser.age).toBe(35);
        expect(extraUser).toHaveProperty('city');
        expect(extraUser).toHaveProperty('position');
        expect(extraUser).not.toHaveProperty('info');
    });

    test('user with info & extra decorators', () => {
        expect(fullUser.name).toBe('Tom');
        expect(fullUser.age).toBe(35);
        expect(fullUser.info()).toBe('Tom is 35 years old');
        expect(fullUser.city).toBe('Sumy');
        expect(fullUser.position).toBe('QA Engineer');
    });
});
