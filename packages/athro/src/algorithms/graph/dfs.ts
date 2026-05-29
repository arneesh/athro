import { Graph } from '../../datastructures/graph';

export function graphDfs<T extends string | number>(graph: Graph<T>, start: T): T[] {
    const visited = new Set<T>();
    const order: T[] = [];

    const walk = (vertex: T) => {
        visited.add(vertex);
        order.push(vertex);

        for (const edge of graph.getNeighbors(vertex)) {
            if (!visited.has(edge.node)) {
                walk(edge.node);
            }
        }
    };

    walk(start);
    return order;
}
