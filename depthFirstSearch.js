/*
 * Initializes the visited array and calls the depth first search recursive function.
 * @param {array} graph - Graph, represented as adjacency lists.
 * @param {number} source - The index of the source vertex.
 */
function depthFirstSearch(graph, source) {
	// array for keeping track of visited vertices
	var visited = new Array();

	// call recursive function
	dfs_rec(graph, source, visited);
}

/*
 * Performs a depth-first search on a graph
 * @param {array} graph - Graph, represented as adjacency lists.
 * @param {number} currVertex - The index of the current vertex.
 * @param {array} visited - Boolean array for keeping track of visited vertices.
 */
function dfs_rec(graph, currVertex, visited) {
	// mark current vertex as visited
	visited[currVertex] = true;

	// print out vertex
	console.log(currVertex + " ");

	// visit adjacent vertices
	for (var i = 0; i < graph[currVertex].length; i++) {
		// get neighboring vertex
		var v = graph[currVertex][i];

		// check if vertex has been visited
		if (!visited[v]) {
			// recursive call
			dfs_rec(graph, v, visited);
		}
	}
}

var adjList = [
    [1, 2, 3],
    [5, 6],
    [4],
    [2, 4],
    [1],
    [],
    [4]
    ];

depthFirstSearch(adjList, 0);