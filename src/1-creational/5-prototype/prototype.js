const protoObject = {
    id: 1,
    protoName: 'protoObject',
    init() {
        return `${this.protoName}: ${this.id}`;
    }
};

const childObject = Object.create(protoObject, {
    childName: {
        value: 'childObject',
    }
});

module.exports = {
    protoObject,
    childObject
};
