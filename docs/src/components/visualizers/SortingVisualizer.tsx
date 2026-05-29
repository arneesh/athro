import React, { useMemo, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import VisualizerControls from './VisualizerControls';
import { useStepPlayer } from './useStepPlayer';
import { generateSortSteps, SortAlgorithm } from '../../utils/algorithmSteps';

interface SortingVisualizerProps {
  algorithm: SortAlgorithm;
  defaultArray?: number[];
}

function SortingVisualizerInner({ algorithm, defaultArray = [8, 3, 6, 2, 9, 1] }: SortingVisualizerProps) {
  const [input, setInput] = useState(defaultArray.join(', '));
  const [array, setArray] = useState(defaultArray);

  const steps = useMemo(() => generateSortSteps(algorithm, array), [algorithm, array]);
  const player = useStepPlayer(steps);
  const step = player.step;

  const maxValue = Math.max(...step.array, 1);

  const getBarClass = (index: number) => {
    const classes = ['viz-bar'];
    if (step.found === index) classes.push('viz-bar--found');
    if (step.pivot === index) classes.push('viz-bar--pivot');
    if (step.compare?.includes(index)) classes.push('viz-bar--compare');
    if (step.swap?.includes(index)) classes.push('viz-bar--swap');
    if (step.highlight?.includes(index)) classes.push('viz-bar--highlight');
    if (step.sortedFrom !== undefined && index >= step.sortedFrom) classes.push('viz-bar--sorted');
    if (step.mid === index) classes.push('viz-bar--mid');
    if (step.low !== undefined && step.high !== undefined && index >= step.low && index <= step.high) {
      classes.push('viz-bar--range');
    }
    return classes.join(' ');
  };

  const applyInput = () => {
    const parsed = input
      .split(',')
      .map((v) => v.trim())
      .filter(Boolean)
      .map(Number)
      .filter((n) => !Number.isNaN(n));

    if (parsed.length > 0) {
      setArray(parsed);
    }
  };

  return (
    <div className="viz-panel">
      <div className="viz-input-row">
        <label htmlFor={`sort-input-${algorithm}`}>Array</label>
        <input
          id={`sort-input-${algorithm}`}
          className="viz-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onBlur={applyInput}
          onKeyDown={(e) => e.key === 'Enter' && applyInput()}
        />
        <button type="button" className="viz-btn" onClick={applyInput}>
          Apply
        </button>
      </div>

      <div className="viz-chart">
        {step.array.map((value, index) => (
          <div key={index} className="viz-bar-wrap">
            <div
              className={getBarClass(index)}
              style={{ height: `${(value / maxValue) * 100}%` }}
              title={`Index ${index}: ${value}`}
            />
            <span className="viz-bar-label">{value}</span>
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

export default function SortingVisualizer(props: SortingVisualizerProps): JSX.Element {
  return (
    <BrowserOnly fallback={<div className="viz-panel viz-panel--loading">Loading visualization…</div>}>
      {() => <SortingVisualizerInner {...props} />}
    </BrowserOnly>
  );
}
