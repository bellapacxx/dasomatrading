// components/ui/Card.tsx
"use client";

import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-black border border-deep-red rounded-lg shadow-md hover:shadow-xl transition ${className}`}
    >
      {children}
    </div>
  );
}
