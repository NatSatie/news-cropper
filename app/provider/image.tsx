"use client";

import { createContext, useState, ReactNode, useContext } from 'react';

interface ImageContextType {
  image: string | null;
  setImage: (value: string) => void;
}

export const ImageContext = createContext<ImageContextType | undefined>(undefined);

interface ImageProviderProps {
  children: ReactNode;
}

export function ImageProvider({ children }: ImageProviderProps) {
  const [image, setImage] = useState<string | null>(null);

  return (
    <ImageContext.Provider value={{ image , setImage }}>
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