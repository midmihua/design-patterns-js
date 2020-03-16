const { User, ChatRoom } = require('./mediator');

describe('Behavioral: mediator', () => {

    const tomas = new User('Tomas');
    const popas = new User('Popas');
    const yopas = new User('Yopas');

    const room = new ChatRoom();

    room.register(tomas);
    room.register(popas);
    room.register(yopas);

    test('should send personal message', () => {
        tomas.send('Hi', popas);
        popas.send('Hello', tomas);
    });

    test('should send common message', () => {
        yopas.send('Hi comrades!');
    });
});
