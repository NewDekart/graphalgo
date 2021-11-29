const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

const depthFirstPrint = (graph, rootValue) => {
    const stack = [rootValue]

    while (stack.length) {
        const currentNode = stack.pop()

        console.log(currentNode)

        const nodeChildren = graph[currentNode]

        if (nodeChildren.length) {
            for (let i = nodeChildren.length - 1; i >= 0; i -= 1) {
                stack.push(nodeChildren[i])
            }
        }
    }
}

depthFirstPrint(graph, 'a')
