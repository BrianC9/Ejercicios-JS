//Estructura de datos: Pila o Stack
class Stack {
    constructor(in_items) {
        this.items = in_items || [];
    }
    length() {
        return this.items.length;
    }
    stack(element) {
        this.items.push(element);
    }
    unstack() {
        return this.length() > 0 ? this.items.pop() : undefined;

    }
    show() {
        for (let item of this.items) {
            console.log(item)
        }
    }
}
// let pila = new Stack([1, 2, 3, 4, 5]);
// pila.stack(7);
// pila.stack(2)
// pila.show();

//Estructura de datos: Colas / Queue
class Queue {
    constructor(in_items) {
        this.items = in_items || [];
    }
    length() {
        return this.items.length;
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        return this.length() > 0 ? this.items.shift() : undefined;

    }
    show() {
        for (let item of this.items) {
            console.log(item)
        }
    }
}
// let cola = new Queue([1, 2, 3, 4, 5]);
// cola.enqueue(7);
// cola.enqueue(2)
// cola.show();

//Estrucuta de datos: Listas enlazadas

class ListNode { // Creamos nodos 
    constructor(data) {
        this.data = data;
        this.nextId = null;
    }
}

class LinkedList { // Creamos una lista enlazada
    constructor(head = null) { // Le pasamos como parámetro el primer elemento, el nodo primero de la lista enlazada
        this.head = head;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.nextId) {
                lastNode = lastNode.nextId;
            }
        }
        return lastNode;
    }
    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.nextId
        }
        return count;
    }

}

let node1 = new ListNode(8);
let node2 = new ListNode(4);
let node3 = new ListNode(1);
node3.nextId = node2;
node2.nextId = node1;
let list = new LinkedList(node3);
console.log(list.getLast());