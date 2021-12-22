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
let pila = new Stack([1, 2, 3, 4, 5]);
pila.stack(7);
pila.stack(2)
pila.show();

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

