import React from 'react';

interface ThinScrollbarProps {
  direction?: 'x' | 'y' | 'both';
  className?: string;
  children: React.ReactNode;
}

/**
 * Minimal scrollbar wrapper.
 * Renders a thin (3px), low-opacity scrollbar using CSS custom scrollbar styling.
 * Falls back gracefully on browsers that only support the standard scrollbar pseudo-elements.
 */
export const ThinScrollbar: React.FC<ThinScrollbarProps> = ({
  direction = 'y',
  className = '',
  children,
}) => {
  const overflowClass =
    direction === 'x'
      ? 'overflow-x-auto overflow-y-hidden'
      : direction === 'both'
      ? 'overflow-auto'
      : 'overflow-y-auto overflow-x-hidden';

  return (
    <div className={`thin-scrollbar ${overflowClass} ${className}`}>
      {children}
    </div>
  );
};
