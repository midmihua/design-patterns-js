class Node {

    constructor(name) {
        this.children = [];
        this.name = name;
    }

    add(child) {
        this.children.push(child);
    }

    remove(child) {
        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i] === child) {
                this.children.splice(i, 1);
                return;
            }
        }
    }

    getChild(i) {
        return this.children[i];
    }

    hasChildren() {
        return this.children.length > 0;
    }
}

const traverse = (indent, node) => {
    log.add(Array(indent++).join("--") + node.name);

    for (var i = 0, len = node.children.length; i < len; i++) {
        traverse(indent, node.getChild(i));
    }
}

const log = (function () {
    var log = "";

    return {
        add: function (msg) {
            log += msg + "\n";
        },
        show: function () {
            console.log(log);
            log = "";
        }
    }
})();

module.exports = {
    Node,
    traverse,
    log
}