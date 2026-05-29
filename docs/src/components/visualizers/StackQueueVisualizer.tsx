import React, { useMemo } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import VisualizerControls from './VisualizerControls';
import { useStepPlayer } from './useStepPlayer';
import { generateQueueSteps, generateStackSteps } from '../../utils/algorithmSteps';

interface StackQueueVisualizerProps {
  mode: 'stack' | 'queue';
}

const STACK_OPS = [
  { op: 'push' as const, value: 3 },
  { op: 'push' as const, value: 7 },
  { op: 'push' as const, value: 2 },
  { op: 'pop' as const },
  { op: 'push' as const, value: 9 },
  { op: 'pop' as const },
];

const QUEUE_OPS = [
  { op: 'enqueue' as const, value: 3 },
  { op: 'enqueue' as const, value: 7 },
  { op: 'enqueue' as const, value: 2 },
  { op: 'dequeue' as const },
  { op: 'enqueue' as const, value: 9 },
  { op: 'dequeue' as const },
];

function StackQueueVisualizerInner({ mode }: StackQueueVisualizerProps) {
  const steps = useMemo(
    () => (mode === 'stack' ? generateStackSteps(STACK_OPS) : generateQueueSteps(QUEUE_OPS)),
    [mode],
  );

  const player = useStepPlayer(steps);
  const step = player.step;
  const isStack = mode === 'stack';

  return (
    <div className="viz-panel">
      <div className={`viz-stack-queue ${isStack ? 'viz-stack-queue--stack' : 'viz-stack-queue--queue'}`}>
        {step.items.length === 0 ? (
          <div className="viz-stack-empty">Empty</div>
        ) : (
          step.items.map((value, index) => (
            <div
              key={`${value}-${index}`}
              className={['viz-stack-item', step.highlight === index ? 'viz-stack-item--active' : '']
                .filter(Boolean)
                .join(' ')}
            >
              {value}
            </div>
          ))
        )}
      </div>

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

export default function StackQueueVisualizer(props: StackQueueVisualizerProps): JSX.Element {
  return (
    <BrowserOnly fallback={<div className="viz-panel viz-panel--loading">Loading visualization…</div>}>
      {() => <StackQueueVisualizerInner {...props} />}
    </BrowserOnly>
  );
}
