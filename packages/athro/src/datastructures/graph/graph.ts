export interface GraphEdge<T> {
    node: T;
    weight: number;
}

export class Graph<T extends string | number = string> {
    private adjacency = new Map<T, GraphEdge<T>[]>();
    private directed: boolean;

    constructor(directed = false) {
        this.directed = directed;
    }

    addVertex(vertex: T): void {
        if (!this.adjacency.has(vertex)) {
            this.adjacency.set(vertex, []);
        }
    }

    addEdge(from: T, to: T, weight = 1): void {
        this.addVertex(from);
        this.addVertex(to);
        this.adjacency.get(from)?.push({ node: to, weight });

        if (!this.directed) {
            this.adjacency.get(to)?.push({ node: from, weight });
        }
    }

    getNeighbors(vertex: T): GraphEdge<T>[] {
        return this.adjacency.get(vertex) ?? [];
    }

    getVertices(): T[] {
        return Array.from(this.adjacency.keys());
    }

    isDirected(): boolean {
        return this.directed;
    }
}
