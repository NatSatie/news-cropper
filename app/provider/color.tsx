"use client";

import { createContext, useState, ReactNode, useContext } from 'react';
import { Color, parseColor } from 'react-aria-components';

interface ColorContextType {
  backgroundHeaderColor: Color;
  setBackgroundHeaderColor: (value: Color) => void;
  headerColor: Color;
  setHeaderColor: (value: Color) => void;
}

export const ColorContext = createContext<ColorContextType | undefined>(undefined);

interface ColorProviderProps {
  children: ReactNode;
}

export function ColorProvider({ children }: ColorProviderProps) {
  const [backgroundHeaderColor, setBackgroundHeaderColor] = useState<Color>(parseColor("#DBDBDB"));
  const [headerColor, setHeaderColor] = useState<Color>(parseColor("#DBDBDB"));

  return (
    <ColorContext.Provider value={{
      backgroundHeaderColor, setBackgroundHeaderColor, headerColor, setHeaderColor
    }}>
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