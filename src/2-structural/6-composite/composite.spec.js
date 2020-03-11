const { Node, traverse, log } = require('./composite');

describe('Structural: Composite', () => {

    const tree = new Node("root");
    const left = new Node("left")
    const right = new Node("right");
    const leftleft = new Node("leftleft");
    const leftright = new Node("leftright");
    const rightleft = new Node("rightleft");
    const rightright = new Node("rightright");

    tree.add(left);
    tree.add(right);
    tree.remove(right);
    tree.add(right);

    left.add(leftleft);
    left.add(leftright);

    right.add(rightleft);
    right.add(rightright);

    test('should print a tree', () => {
        traverse(1, tree);
        log.show();
    });
});
