import React, { useMemo } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import VisualizerControls from './VisualizerControls';
import { useStepPlayer } from './useStepPlayer';
import {
  DEMO_GRAPH_EDGES,
  DEMO_GRAPH_POSITIONS,
  generateDijkstraSteps,
  generateGraphBfsSteps,
  generateGraphDfsSteps,
  GraphEdge,
} from '../../utils/graphSteps';

interface GraphVisualizerProps {
  mode: 'bfs' | 'dfs' | 'dijkstra';
  edges?: GraphEdge[];
}

function GraphVisualizerInner({ mode, edges = DEMO_GRAPH_EDGES }: GraphVisualizerProps) {
  const steps = useMemo(() => {
    if (mode === 'bfs') return generateGraphBfsSteps(edges);
    if (mode === 'dfs') return generateGraphDfsSteps(edges);
    return generateDijkstraSteps(edges);
  }, [mode, edges]);

  const player = useStepPlayer(steps);
  const step = player.step;
  const visited = new Set(step.visited);
  const pathEdges = new Set(
    (step.path ?? []).slice(0, -1).map((node, index) => `${node}-${step.path?.[index + 1]}`),
  );

  return (
    <div className="viz-panel">
      <svg className="viz-graph" viewBox="0 0 400 260" role="img" aria-label="Graph visualization">
        {edges.map((edge) => {
          const from = DEMO_GRAPH_POSITIONS[edge.from];
          const to = DEMO_GRAPH_POSITIONS[edge.to];
          if (!from || !to) return null;
          const key = `${edge.from}-${edge.to}`;
          const isActive =
            (step.activeEdge?.from === edge.from && step.activeEdge?.to === edge.to) ||
            pathEdges.has(key) ||
            pathEdges.has(`${edge.to}-${edge.from}`);

          return (
            <g key={key}>
              <line
                x1={from.x}
                y1={from.y + 16}
                x2={to.x}
                y2={to.y + 16}
                className={isActive ? 'viz-graph-edge viz-graph-edge--active' : 'viz-graph-edge'}
              />
              {edge.weight !== undefined && (
                <text
                  x={(from.x + to.x) / 2}
                  y={(from.y + to.y) / 2 + 8}
                  className="viz-graph-weight"
                >
                  {edge.weight}
                </text>
              )}
            </g>
          );
        })}

        {Object.entries(DEMO_GRAPH_POSITIONS).map(([label, position]) => (
          <g key={label} transform={`translate(${position.x - 18}, ${position.y})`}>
            <circle
              r={18}
              className={[
                'viz-graph-node',
                visited.has(label) ? 'viz-graph-node--visited' : '',
                step.current === label ? 'viz-graph-node--current' : '',
                step.path?.includes(label) ? 'viz-graph-node--path' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            />
            <text y={5} textAnchor="middle" className="viz-tree-label">
              {label}
            </text>
          </g>
        ))}
      </svg>

      {step.queue && step.queue.length > 0 && (
        <div className="viz-queue-display">
          <span className="viz-queue-label">Queue:</span>
          {step.queue.map((value) => (
            <span key={value} className="viz-queue-item">
              {value}
            </span>
          ))}
        </div>
      )}

      <p className="viz-description">{step.description}</p>

      <VisualizerControls
        isPlaying={player.isPlaying}
        stepIndex={player.stepIndex}
        totalSteps={player.totalSteps}
        speed={player.speed}
        onPlay={player.play}
        onPause={player.pause}
        onStep={player.stepForward}
        onReset={player.reset}
        onSpeedChange={player.setSpeed}
      />
    </div>
  );
}

export default function GraphVisualizer(props: GraphVisualizerProps): JSX.Element {
  return (
    <BrowserOnly fallback={<div className="viz-panel viz-panel--loading">Loading visualization…</div>}>
      {() => <GraphVisualizerInner {...props} />}
    </BrowserOnly>
  );
}
