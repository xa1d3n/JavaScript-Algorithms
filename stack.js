/*
    Stack node class. Keeps track of data, next node, min and max values.
    @param {data} - data stored in node.
*/
var Node = function(data) {
    this.data = data;
    this.next = null;
    this.min = null;
    this.max = null;
}

/*
    Stack class.
*/
var Stack = function() {
    this.top = null;
}

/*
    Pushes node to end of stack.
     @param {data} - data stored in node.
*/
Stack.prototype.push = function(data) {
    var node = new Node(data);
    node.min = this.calcMin(data);
    node.max = this.calcMax(data);

    if (this.top === null) {
        this.top = node;
    }
    else {
        node.next = this.top;
        this.top = node;
    }
}

/*
    Removes and returns node from top of stack.
*/
Stack.prototype.pop = function() {
    if (this.top) {
       var data = this.top.data;
       if (this.top.next) {
           this.top = this.top.next;
       }
       return data;
    }
    return null;
}


/*
    Returns data from node at top of stack.
*/
Stack.prototype.peek = function() {
    return this.top.data;
}

/*
    Sets current minimum stack node value to node being inserted.
*/
Stack.prototype.calcMin = function(val) {
    if (this.top) {
        if (val < this.top.min) {
            return val;
        }
        else {
            return this.top.min;
        }
    }
    else {
        return val;
    }
}

/*
    Sets current maximum stack node value to node being inserted.
*/
Stack.prototype.calcMax = function(val) {
    if (this.top) {
        if (val > this.top.max) {
            return val;
        }
        else {
            return this.top.max;
        }
    }
    else {
        return val;
    }
}

/*
    Returns minimum stack value
*/
Stack.prototype.getMin = function() {
    return this.top.min;
}

/*
    Returns maximum stack value
*/
Stack.prototype.getMax = function() {
    return this.top.max;
}

var sll = new Stack();
sll.push(3);
sll.push(1);
sll.push(2);
sll.push(6);
sll.push(0);
sll.push(4);
sll.push(5);


console.log(sll.getMin());
console.log(sll.getMax());
