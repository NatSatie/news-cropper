"use client";

import { createContext, useState, ReactNode, useContext } from 'react';
import { fontOptions } from '../canvas/fonthelper';

interface HeaderContextType {
  text: string;
  setText: (value: string) => void;
  fontSize?: number;
  setFontSize?: (value: number) => void;
  fontWeight?: string;
  setFontWeight?: (value: string) => void;
  fontFamily?: string;
  setFontFamily?: (value: string) => void;
}

export const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

interface HeaderProviderProps {
  children: ReactNode;
}

export function HeaderProvider({ children }: HeaderProviderProps) {
  const [text, setText] = useState<string>("My Awesome Post Title");
  const [fontSize, setFontSize] = useState<number>(24);
  const [fontWeight, setFontWeight] = useState<string>("bold");
  const [fontFamily, setFontFamily] = useState<string>(fontOptions[0].name);

  return (
    <HeaderContext.Provider value={{ text, setText, fontSize, setFontSize, fontWeight, setFontWeight, fontFamily, setFontFamily }}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeaderText() {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error('useHeaderText must be used within a HeaderProvider');
  }
  return context;
}