const { SkillsRegistry } = require('./facade');

describe('Structural: Facade', () => {

    const registry = new SkillsRegistry();

    test('should create tech skills', () => {
        expect(registry.register('tech', 'mongodb', 'noSql database'))
            .toEqual(expect.stringContaining('Tech'));

    });

    test('should create soft skills', () => {
        expect(registry.register(null, 'communicative', 'easy-going and congenial'))
            .toEqual(expect.stringContaining('Soft'));
    });
});
