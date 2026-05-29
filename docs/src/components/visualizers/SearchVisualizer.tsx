import React, { useMemo, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import VisualizerControls from './VisualizerControls';
import { useStepPlayer } from './useStepPlayer';
import { generateBinarySearchSteps, generateLinearSearchSteps } from '../../utils/algorithmSteps';

interface SearchVisualizerProps {
  mode: 'linear' | 'binary';
  defaultArray?: number[];
  defaultTarget?: number;
}

function SearchVisualizerInner({
  mode,
  defaultArray = mode === 'binary' ? [2, 4, 6, 8, 10, 12] : [4, 2, 8, 6, 10],
  defaultTarget = 8,
}: SearchVisualizerProps) {
  const [array] = useState(defaultArray);
  const [target, setTarget] = useState(defaultTarget);

  const steps = useMemo(
    () => (mode === 'binary' ? generateBinarySearchSteps(array, target) : generateLinearSearchSteps(array, target)),
    [mode, array, target],
  );

  const player = useStepPlayer(steps);
  const step = player.step;

  const getCellClass = (index: number) => {
    const classes = ['viz-cell'];
    if (step.found === index) classes.push('viz-cell--found');
    if (step.highlight?.includes(index)) classes.push('viz-cell--active');
    if (step.mid === index) classes.push('viz-cell--mid');
    if (step.low !== undefined && step.high !== undefined) {
      if (index < step.low || index > step.high) classes.push('viz-cell--excluded');
      else classes.push('viz-cell--range');
    }
    return classes.join(' ');
  };

  return (
    <div className="viz-panel">
      <div className="viz-input-row">
        <label htmlFor={`search-target-${mode}`}>Target</label>
        <input
          id={`search-target-${mode}`}
          className="viz-input viz-input--small"
          type="number"
          value={target}
          onChange={(e) => setTarget(Number(e.target.value))}
        />
      </div>

      <div className="viz-array-row">
        {step.array.map((value, index) => (
          <div key={index} className={getCellClass(index)}>
            <span className="viz-cell-value">{value}</span>
            <span className="viz-cell-index">{index}</span>
          </div>
        ))}
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

export default function SearchVisualizer(props: SearchVisualizerProps): JSX.Element {
  return (
    <BrowserOnly fallback={<div className="viz-panel viz-panel--loading">Loading visualization…</div>}>
      {() => <SearchVisualizerInner {...props} />}
    </BrowserOnly>
  );
}
