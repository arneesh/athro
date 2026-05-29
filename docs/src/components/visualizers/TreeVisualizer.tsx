import React, { useMemo } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import VisualizerControls from './VisualizerControls';
import { useStepPlayer } from './useStepPlayer';
import {
  DEMO_TREE,
  generateBfsSteps,
  generateDfsSteps,
  TreeNode,
  TreeStep,
} from '../../utils/algorithmSteps';

interface TreeLayoutNode {
  value: number;
  x: number;
  y: number;
  left?: TreeLayoutNode;
  right?: TreeLayoutNode;
}

interface TreeVisualizerProps {
  mode: 'bfs' | 'pre' | 'in' | 'post';
  tree?: TreeNode;
}

function layoutTree(node: TreeNode | null | undefined, depth = 0, x = 0, spacing = 48): TreeLayoutNode | null {
  if (!node) return null;

  const left = layoutTree(node.left, depth + 1, x - spacing / (depth + 1), spacing);
  const right = layoutTree(node.right, depth + 1, x + spacing / (depth + 1), spacing);

  return {
    value: node.value,
    x,
    y: depth * 70,
    left: left ?? undefined,
    right: right ?? undefined,
  };
}

function collectEdges(node: TreeLayoutNode | null | undefined, edges: Array<[TreeLayoutNode, TreeLayoutNode]>) {
  if (!node) return;
  if (node.left) {
    edges.push([node, node.left]);
    collectEdges(node.left, edges);
  }
  if (node.right) {
    edges.push([node, node.right]);
    collectEdges(node.right, edges);
  }
}

function collectNodes(node: TreeLayoutNode | null | undefined, nodes: TreeLayoutNode[]) {
  if (!node) return;
  nodes.push(node);
  collectNodes(node.left, nodes);
  collectNodes(node.right, nodes);
}

function TreeVisualizerInner({ mode, tree = DEMO_TREE }: TreeVisualizerProps) {
  const steps = useMemo<TreeStep[]>(() => {
    if (mode === 'bfs') return generateBfsSteps(tree);
    return generateDfsSteps(tree, mode);
  }, [mode, tree]);

  const player = useStepPlayer(steps);
  const step = player.step;
  const layout = layoutTree(tree, 0, 200, 120);

  const nodes: TreeLayoutNode[] = [];
  const edges: Array<[TreeLayoutNode, TreeLayoutNode]> = [];
  collectNodes(layout, nodes);
  collectEdges(layout, edges);

  const visitedSet = new Set(step.visited);
  const isCurrent = (value: number) => step.current === value;

  return (
    <div className="viz-panel">
      <svg className="viz-tree" viewBox="0 0 420 280" role="img" aria-label="Binary tree visualization">
        {edges.map(([from, to], index) => (
          <line
            key={index}
            x1={from.x}
            y1={from.y + 18}
            x2={to.x}
            y2={to.y + 2}
            className="viz-tree-edge"
          />
        ))}
        {nodes.map((node) => (
          <g key={node.value} transform={`translate(${node.x - 18}, ${node.y})`}>
            <circle
              r={18}
              className={[
                'viz-tree-node',
                visitedSet.has(node.value) ? 'viz-tree-node--visited' : '',
                isCurrent(node.value) ? 'viz-tree-node--current' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            />
            <text y={5} textAnchor="middle" className="viz-tree-label">
              {node.value}
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

      {step.visited.length > 0 && (
        <div className="viz-queue-display">
          <span className="viz-queue-label">Visited:</span>
          {step.visited.map((value) => (
            <span key={value} className="viz-queue-item viz-queue-item--visited">
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

export default function TreeVisualizer(props: TreeVisualizerProps): JSX.Element {
  return (
    <BrowserOnly fallback={<div className="viz-panel viz-panel--loading">Loading visualization…</div>}>
      {() => <TreeVisualizerInner {...props} />}
    </BrowserOnly>
  );
}
