import { Graph } from '../../datastructures/graph';

export function topologicalSort<T extends string | number>(graph: Graph<T>): T[] {
    const inDegree = new Map<T, number>();
    const order: T[] = [];

    for (const vertex of graph.getVertices()) {
        inDegree.set(vertex, 0);
    }

    for (const vertex of graph.getVertices()) {
        for (const edge of graph.getNeighbors(vertex)) {
            inDegree.set(edge.node, (inDegree.get(edge.node) ?? 0) + 1);
        }
    }

    const queue: T[] = [];
    for (const [vertex, degree] of Array.from(inDegree.entries())) {
        if (degree === 0) queue.push(vertex);
    }

    while (queue.length > 0) {
        const vertex = queue.shift() as T;
        order.push(vertex);

        for (const edge of graph.getNeighbors(vertex)) {
            const nextDegree = (inDegree.get(edge.node) ?? 0) - 1;
            inDegree.set(edge.node, nextDegree);
            if (nextDegree === 0) queue.push(edge.node);
        }
    }

    return order.length === graph.getVertices().length ? order : [];
}
