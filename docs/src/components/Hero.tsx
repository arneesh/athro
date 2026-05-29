import React from 'react';
import Link from '@docusaurus/Link';

export default function Hero(): JSX.Element {
  return (
    <div className="hero-banner">
      <div className="hero-banner__glow" />
      <div className="hero-banner__content">
        <span className="hero-banner__eyebrow">Algorithms & Data Structures</span>
        <h1 className="hero-banner__title">
          Learn by seeing.
          <br />
          Ship with <span className="hero-banner__accent">Athro</span>.
        </h1>
        <p className="hero-banner__subtitle">
          A TypeScript library with interactive visualizations for every algorithm. Built for developers who
          want clarity, not just code snippets.
        </p>
        <div className="hero-banner__actions">
          <Link className="hero-banner__button hero-banner__button--primary" to="/Getting%20Started">
            Get started
          </Link>
          <a
            className="hero-banner__button hero-banner__button--secondary"
            href="https://www.npmjs.com/package/athro"
            target="_blank"
            rel="noreferrer"
          >
            View on npm
          </a>
        </div>
      </div>
    </div>
  );
}
