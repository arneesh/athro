export interface GraphEdge {
  from: string;
  to: string;
  weight?: number;
}

export interface GraphStep {
  visited: string[];
  current?: string;
  queue?: string[];
  activeEdge?: GraphEdge;
  path?: string[];
  description: string;
}

export const DEMO_GRAPH_EDGES: GraphEdge[] = [
  { from: 'A', to: 'B' },
  { from: 'A', to: 'C' },
  { from: 'B', to: 'D' },
  { from: 'C', to: 'E' },
];

export const DEMO_GRAPH_POSITIONS: Record<string, { x: number; y: number }> = {
  A: { x: 200, y: 30 },
  B: { x: 100, y: 120 },
  C: { x: 300, y: 120 },
  D: { x: 60, y: 210 },
  E: { x: 340, y: 210 },
};

const buildAdjacency = (edges: GraphEdge[], directed = false) => {
  const adjacency = new Map<string, string[]>();
  const add = (from: string, to: string) => {
    if (!adjacency.has(from)) adjacency.set(from, []);
    adjacency.get(from)?.push(to);
  };

  for (const edge of edges) {
    add(edge.from, edge.to);
    if (!directed) add(edge.to, edge.from);
  }

  return adjacency;
};

export function generateGraphBfsSteps(edges: GraphEdge[] = DEMO_GRAPH_EDGES, start = 'A'): GraphStep[] {
  const adjacency = buildAdjacency(edges);
  const steps: GraphStep[] = [{ visited: [], queue: [start], description: `Start BFS from ${start}` }];
  const visited: string[] = [];
  const queue = [start];
  const seen = new Set<string>([start]);

  while (queue.length > 0) {
    const current = queue.shift() as string;
    visited.push(current);
    steps.push({
      visited: [...visited],
      current,
      queue: [...queue],
      description: `Visit ${current}`,
    });

    for (const neighbor of adjacency.get(current) ?? []) {
      if (!seen.has(neighbor)) {
        seen.add(neighbor);
        queue.push(neighbor);
        steps.push({
          visited: [...visited],
          current,
          queue: [...queue],
          activeEdge: { from: current, to: neighbor },
          description: `Enqueue ${neighbor}`,
        });
      }
    }
  }

  steps.push({ visited: [...visited], description: 'Traversal complete' });
  return steps;
}

export function generateGraphDfsSteps(edges: GraphEdge[] = DEMO_GRAPH_EDGES, start = 'A'): GraphStep[] {
  const adjacency = buildAdjacency(edges);
  const steps: GraphStep[] = [{ visited: [], description: `Start DFS from ${start}` }];
  const visited: string[] = [];
  const seen = new Set<string>();

  const walk = (node: string) => {
    seen.add(node);
    visited.push(node);
    steps.push({ visited: [...visited], current: node, description: `Visit ${node}` });

    for (const neighbor of adjacency.get(node) ?? []) {
      if (!seen.has(neighbor)) {
        steps.push({
          visited: [...visited],
          current: node,
          activeEdge: { from: node, to: neighbor },
          description: `Explore ${neighbor}`,
        });
        walk(neighbor);
      }
    }
  };

  walk(start);
  steps.push({ visited: [...visited], description: 'Traversal complete' });
  return steps;
}

export function generateDijkstraSteps(
  edges: GraphEdge[] = [
    { from: 'A', to: 'B', weight: 4 },
    { from: 'A', to: 'C', weight: 2 },
    { from: 'B', to: 'D', weight: 5 },
    { from: 'C', to: 'D', weight: 8 },
  ],
  start = 'A',
  end = 'D',
): GraphStep[] {
  const adjacency = buildAdjacency(edges, true);
  const steps: GraphStep[] = [{ visited: [], description: `Find shortest path from ${start} to ${end}` }];
  const distances = new Map<string, number>();
  const previous = new Map<string, string | null>();
  const unvisited = new Set<string>();

  for (const edge of edges) {
    unvisited.add(edge.from);
    unvisited.add(edge.to);
  }

  for (const node of unvisited) {
    distances.set(node, node === start ? 0 : Infinity);
    previous.set(node, null);
  }

  while (unvisited.size > 0) {
    let current: string | null = null;
    let smallest = Infinity;

    for (const node of unvisited) {
      const distance = distances.get(node) ?? Infinity;
      if (distance < smallest) {
        smallest = distance;
        current = node;
      }
    }

    if (current === null || smallest === Infinity) break;

    unvisited.delete(current);
    steps.push({
      visited: [...(steps[steps.length - 1]?.visited ?? []), current],
      current,
      description: `Select ${current} with distance ${smallest}`,
    });

    for (const neighbor of adjacency.get(current) ?? []) {
      if (!unvisited.has(neighbor)) continue;
      const edge = edges.find((item) => item.from === current && item.to === neighbor);
      const alt = smallest + (edge?.weight ?? 1);
      if (alt < (distances.get(neighbor) ?? Infinity)) {
        distances.set(neighbor, alt);
        previous.set(neighbor, current);
        steps.push({
          visited: steps[steps.length - 1].visited,
          current,
          activeEdge: { from: current, to: neighbor, weight: edge?.weight },
          description: `Update distance to ${neighbor} → ${alt}`,
        });
      }
    }
  }

  const path: string[] = [];
  let cursor: string | null | undefined = end;
  while (cursor) {
    path.unshift(cursor);
    cursor = previous.get(cursor) ?? null;
  }

  steps.push({
    visited: steps[steps.length - 1].visited,
    path,
    description: `Shortest path: ${path.join(' → ')} (${distances.get(end)} units)`,
  });

  return steps;
}
