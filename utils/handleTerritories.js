export function handleTerritories(data) {

    data.map((datum) => {
        datum.text = (datum.parent === null) ?
            '<ul id="' + datum.id + '">'+ datum.name +'</ul>' :
            '<ul id="' + datum.id + '">'+ datum.name +'</ul>'
    });
}

const treeNode = (id, name) => {
    let children = [];

    this.id = id;
    this.name = name;
    this.parent = null;

    this.setParent = function(parent) {
       this.parent = parent;
    };
    this.addChild = (node) => {
       children.push(node);
       node.setParent(this);
    };
}

const Tree = function() {
    this.nodes = [];
    this.findNodebyId = (id) => {
        for(let i = 0; i < this.nodes.length; i++) {
            if(this.nodes[i].id === id)
                return this.nodes[i];
        }
        return null;
    }
    this.createNode = (id, name, parent) => {
        let node = new treeNode(id, name);
        if(parent) {
            parent.addChild(node);
        }
        this.nodes.push(node);
    }
}

export default function createTree(data) {
    let tree = new Tree();
    for (let i=0; i < data.length; i++) {
        let inputNode = data[i];
        let parent = inputNode.parent ? tree.findNodeById(inputNode.parent) : null;
        tree.createNode(inputNode.id, inputNode.name, parent);
    }
    return tree.nodes;
}