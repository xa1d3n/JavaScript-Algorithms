/** Queue data structure */
var Queue = function() {
    this.items = [];
};

/** Enqueue function. Adds object to end of queue **/
Queue.prototype.enqueue = function(obj) {
    this.items.push(obj);
};

/** Dequeue function. Returns and removes first object from queue **/
Queue.prototype.dequeue = function() {
    return this.items.shift();
};

/** Checks if queue is empty **/
Queue.prototype.isEmpty = function() {
    return this.items.length === 0;
};

/*
 * Performs a breadth-first search on a graph
 * @param {array} graph - Graph, represented as adjacency lists.
 * @param {number} source - The index of the source vertex.
 * @returns {array} Array of objects describing each vertex
 */
 function breadthFirstSearch(graph, source) {
    // array to keep track of each nodes distance and predecessor 
    var bfsInfo = new Array();
    // queue to store nodes
    var queue = new Queue();
    // set each nodes distance and predecessor to null
    for (var i = 0; i < graph.length; i++) {
        bfsInfo[i] = {
            distance: null,
            predecessor: null
        }
    }

    // set source vertex distance to 0
    bfsInfo[source].distance = 0;

    // add source vertex to queue
    queue.enqueue(source);

    // iterate while queue is not empty
    while (!queue.isEmpty()) {
        // dequeue vertex
        var v = queue.dequeue();

        // iterate over dequeued vertex's (v) neighbors (u)
        for (var i = 0; i < graph[v].length; i++){
            // the current vertex
            var u = graph[v][i];

            // check if distance is null
            if (bfsInfo[u].distance === null) {
                // set distance to dequed vertex distance + 1
                bfsInfo[u].distance = bfsInfo[v].distance + 1;
                // set predecessor to deueued vertex
                bfsInfo[u].predecessor = v;
                // enqueue vertex
                queue.enqueue(u);
            }
        }
    }

    return bfsInfo;
 };

var adjList = [
    [1],
    [0, 4, 5],
    [3, 4, 5],
    [2, 6],
    [1, 2],
    [1, 2, 6],
    [3, 5],
    []
    ];
var bfsInfo = breadthFirstSearch(adjList, 3);
for (var i = 0; i < adjList.length; i++) {
    console.log("vertex " + i + ": distance = " + bfsInfo[i].distance + ", predecessor = " + bfsInfo[i].predecessor);
}