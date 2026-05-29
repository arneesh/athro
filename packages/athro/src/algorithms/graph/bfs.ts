import { Graph } from '../../datastructures/graph';

export function graphBfs<T extends string | number>(graph: Graph<T>, start: T): T[] {
    const visited = new Set<T>();
    const order: T[] = [];
    const queue: T[] = [start];
    visited.add(start);

    while (queue.length > 0) {
        const vertex = queue.shift() as T;
        order.push(vertex);

        for (const edge of graph.getNeighbors(vertex)) {
            if (!visited.has(edge.node)) {
                visited.add(edge.node);
                queue.push(edge.node);
            }
        }
    }

    return order;
}
