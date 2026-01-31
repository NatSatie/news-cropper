"use client";

import { createContext, useState, ReactNode, useContext } from 'react';

interface ColorContextType {
  color: string;
  setColor: (value: string) => void;
}

export const ColorContext = createContext<ColorContextType | undefined>(undefined);

interface ColorProviderProps {
  children: ReactNode;
}

export function ColorProvider({ children }: ColorProviderProps) {
  const [color, setColor] = useState<string>("My Awesome Post");

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColor() {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error('useColorText must be used within a ColorProvider');
  }
  return context;
}