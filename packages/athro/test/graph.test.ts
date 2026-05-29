import { describe, it, expect } from 'vitest';
import { Graph, graphBfs, graphDfs, dijkstra, topologicalSort } from '../src';

describe('graph data structure', () => {
    it('tracks vertices and edges', () => {
        const graph = new Graph<string>();
        graph.addEdge('A', 'B');
        graph.addEdge('B', 'C');

        expect(graph.getVertices()).toEqual(expect.arrayContaining(['A', 'B', 'C']));
        expect(graph.getNeighbors('B')).toEqual(expect.arrayContaining([{ node: 'A', weight: 1 }, { node: 'C', weight: 1 }]));
    });
});

describe('graph algorithms', () => {
    const buildGraph = () => {
        const graph = new Graph<string>();
        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');
        graph.addEdge('B', 'D');
        graph.addEdge('C', 'E');
        return graph;
    };

    it('breadth first search', () => {
        expect(graphBfs(buildGraph(), 'A')).toEqual(['A', 'B', 'C', 'D', 'E']);
    });

    it('depth first search', () => {
        expect(graphDfs(buildGraph(), 'A')).toEqual(['A', 'B', 'D', 'C', 'E']);
    });

    it('dijkstra shortest path', () => {
        const graph = new Graph<string>(true);
        graph.addEdge('A', 'B', 4);
        graph.addEdge('A', 'C', 2);
        graph.addEdge('B', 'C', 1);
        graph.addEdge('B', 'D', 5);
        graph.addEdge('C', 'D', 8);

        const result = dijkstra(graph, 'A', 'D');
        expect(result.path).toEqual(['A', 'B', 'D']);
        expect(result.distances.get('D')).toBe(9);
    });

    it('topological sort', () => {
        const graph = new Graph<string>(true);
        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');
        graph.addEdge('B', 'D');
        graph.addEdge('C', 'D');

        expect(topologicalSort(graph)).toEqual(['A', 'B', 'C', 'D']);
    });
});
