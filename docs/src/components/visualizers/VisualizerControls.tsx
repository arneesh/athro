import React from 'react';

interface VisualizerControlsProps {
  isPlaying: boolean;
  stepIndex: number;
  totalSteps: number;
  speed: number;
  onPlay: () => void;
  onPause: () => void;
  onStep: () => void;
  onReset: () => void;
  onSpeedChange: (speed: number) => void;
}

export default function VisualizerControls({
  isPlaying,
  stepIndex,
  totalSteps,
  speed,
  onPlay,
  onPause,
  onStep,
  onReset,
  onSpeedChange,
}: VisualizerControlsProps): JSX.Element {
  const atEnd = stepIndex >= totalSteps - 1;

  return (
    <div className="viz-controls">
      <div className="viz-controls__buttons">
        {isPlaying ? (
          <button type="button" className="viz-btn" onClick={onPause}>
            Pause
          </button>
        ) : (
          <button type="button" className="viz-btn viz-btn--primary" onClick={onPlay} disabled={atEnd}>
            Play
          </button>
        )}
        <button type="button" className="viz-btn" onClick={onStep} disabled={atEnd}>
          Step
        </button>
        <button type="button" className="viz-btn" onClick={onReset}>
          Reset
        </button>
      </div>
      <div className="viz-controls__meta">
        <span>
          Step {Math.min(stepIndex + 1, totalSteps)} / {totalSteps}
        </span>
        <label className="viz-speed">
          Speed
          <input
            type="range"
            min={200}
            max={1200}
            step={50}
            value={speed}
            onChange={(e) => onSpeedChange(Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
}
