import React from 'react';
import clsx from 'clsx';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className }) => {
  return (
    <div className={clsx('bg-white rounded-lg shadow-md p-6', className)}>
      {title && <h3 className="text-2xl font-semibold mb-4">{title}</h3>}
      <div className="text-gray-700">
        {children}
      </div>
    </div>
  );
};

export default Card;
