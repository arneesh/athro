import React from 'react';
import Link from '@docusaurus/Link';

interface DocCardProps {
  title: string;
  description: string;
  to: string;
  badge?: string;
}

export default function DocCard({ title, description, to, badge }: DocCardProps): JSX.Element {
  return (
    <Link to={to} className="doc-card">
      <div className="doc-card__header">
        <h3 className="doc-card__title">{title}</h3>
        {badge && <span className="doc-card__badge">{badge}</span>}
      </div>
      <p className="doc-card__description">{description}</p>
      <span className="doc-card__link">Read docs →</span>
    </Link>
  );
}
