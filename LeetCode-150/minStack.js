class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(value) {
        if (this.stack.length === 0) {
            this.stack.push(value);
            this.minStack.push(value);
        }
        else {
            this.stack.push(value);
            this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], value));
        }
    }



    pop() {
        if (this.stack.length === 0) {
            return null;
        }
        this.stack.pop();
        this.minStack.pop();
    }



    top() {
        return this.stack[this.stack.length - 1];
    }



    getMin() {
        return this.minStack[this.minStack.length - 1];
    }

}