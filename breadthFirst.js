const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

const breadthFirstPrint = (graph, rootValue) => {
    const queue = [ rootValue ];

    while (queue.length) {

        const currentNode = queue.shift()

        console.log(currentNode)

        const nodeChildren = graph[currentNode]

        nodeChildren.forEach(element => {
            queue.push(element)
        });
    }
}

breadthFirstPrint(graph, 'a')
