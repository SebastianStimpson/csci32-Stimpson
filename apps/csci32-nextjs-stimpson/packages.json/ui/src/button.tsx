"use client"

import { ReactNode } from "react"

interface ButtonProps {
  childern: ReactNode;
  className?: StorageManager;
  appName: string;
}

export const Button = ({ children, className, }: ButtonProps) => {
  return (
    <button
    className={className}
    onClick={() => alert(`Hello from your app!`)}
    >
      {childern}
    </button>
  );
};
