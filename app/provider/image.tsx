"use client";

import { createContext, useState, ReactNode, useContext } from 'react';

interface ImageContextType {
  background: string | null;
  setBackground: (value: string | null) => void;
  footer: string | null;
  setFooter: (value: string | null) => void;
}

export const ImageContext = createContext<ImageContextType | undefined>(undefined);

interface ImageProviderProps {
  children: ReactNode;
}

export function ImageProvider({ children }: ImageProviderProps) {
  const [background, setBackground] = useState<string | null>(null);
  const [footer, setFooter] = useState<string | null>(null);

  return (
    <ImageContext.Provider value={{ background, setBackground, footer, setFooter }}>
      {children}
    </ImageContext.Provider>
  );
}

export function useImage() {
  const context = useContext(ImageContext);
  if (context === undefined) {
    throw new Error('useImageText must be used within a ImageProvider');
  }
  return context;
}