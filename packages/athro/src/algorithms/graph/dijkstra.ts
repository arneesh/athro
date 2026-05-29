import { Graph } from '../../datastructures/graph';

export interface DijkstraResult<T extends string | number> {
    distances: Map<T, number>;
    previous: Map<T, T | null>;
    path?: T[];
}

export function dijkstra<T extends string | number>(
    graph: Graph<T>,
    start: T,
    end?: T,
): DijkstraResult<T> {
    const distances = new Map<T, number>();
    const previous = new Map<T, T | null>();
    const unvisited = new Set<T>(graph.getVertices());

    for (const vertex of graph.getVertices()) {
        distances.set(vertex, vertex === start ? 0 : Infinity);
        previous.set(vertex, null);
    }

    while (unvisited.size > 0) {
        let current: T | null = null;
        let smallest = Infinity;

        for (const vertex of Array.from(unvisited)) {
            const distance = distances.get(vertex) ?? Infinity;
            if (distance < smallest) {
                smallest = distance;
                current = vertex;
            }
        }

        if (current === null || smallest === Infinity) break;

        unvisited.delete(current);

        for (const edge of graph.getNeighbors(current)) {
            if (!unvisited.has(edge.node)) continue;

            const alt = (distances.get(current) ?? Infinity) + edge.weight;
            if (alt < (distances.get(edge.node) ?? Infinity)) {
                distances.set(edge.node, alt);
                previous.set(edge.node, current);
            }
        }
    }

    if (end === undefined) {
        return { distances, previous };
    }

    const path: T[] = [];
    let cursor: T | null | undefined = end;

    while (cursor !== null && cursor !== undefined) {
        path.unshift(cursor);
        cursor = previous.get(cursor) ?? null;
    }

    if (path[0] !== start) {
        return { distances, previous, path: [] };
    }

    return { distances, previous, path };
}
