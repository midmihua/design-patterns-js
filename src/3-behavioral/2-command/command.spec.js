const { Operation, Command } = require('./command');

describe('Behavioral: command', () => {

    const operation = new Operation(2);
    const command = new Command(operation);

    test('should return square', () => {
        expect(command.execute('square')).toBe(4);
        expect(command.executedOperations.length).toBe(1);
        expect(command.executedOperations).toEqual(['square']);
    });

    test('should return cude', () => {
        expect(command.execute('cude')).toBe(8);
        expect(command.executedOperations.length).toBe(2);
        expect(command.executedOperations).toEqual(['square', 'cude']);
    });
});
