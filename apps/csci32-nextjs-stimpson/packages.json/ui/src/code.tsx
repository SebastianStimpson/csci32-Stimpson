import React from 'react';
import clsx from 'clsx';

interface CodeProps {
  children: string;
  block?: boolean;
  className?: string;
}

const Code: React.FC<CodeProps> = ({ children, block = false, className }) => {
  const baseStyles = 'font-mono text-sm bg-gray-100 rounded';
  const inlineStyles = 'px-2 py-1';
  const blockStyles = 'block p-4 overflow-x-auto';

  return (
    <code className={clsx(baseStyles, block ? blockStyles : inlineStyles, className)}>
      {children}
    </code>
  );
};

export default Code;
