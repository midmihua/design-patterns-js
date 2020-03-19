const { Subject, Observer } = require('./observer');

describe.only('Behavioral: observer', () => {

    const stream$ = new Subject();

    const obs1 = new Observer();
    const obs2 = new Observer(17);

    stream$.subscribe(obs1);
    stream$.subscribe(obs2);

    test('should return base state', () => {
        expect(obs1.state).toBe(1);
        expect(obs2.state).toBe(17);
    });

    test('should return INC state', () => {
        stream$.fire({ type: 'INC' });
        stream$.fire({ type: 'INC' });
        expect(obs1.state).toBe(3);
        expect(obs2.state).toBe(19);
    });

    test('should return DEC state', () => {
        stream$.fire({ type: 'DEC' });
        expect(obs1.state).toBe(2);
        expect(obs2.state).toBe(18);
    });

    test('should return ADD state', () => {
        stream$.fire({ type: 'ADD', payload: 10 });
        expect(obs1.state).toBe(12);
        expect(obs2.state).toBe(28);
    });
});