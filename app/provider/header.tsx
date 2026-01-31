"use client";

import { createContext, useState, ReactNode, useContext } from 'react';

interface HeaderContextType {
    header: string;
    setHeader: (value: string) => void;
    description: string;
    setDescription: (value: string) => void;
}

export const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

interface HeaderProviderProps {
  children: ReactNode;
}

export function HeaderProvider({ children }: HeaderProviderProps) {
  const [header, setHeader] = useState<string>("My Awesome Post");
  const [description, setDescription] = useState<string>("This event will be incredible! Please save the date and join us for a memorable experience. More details to follow soon.ß");

  return (
    <HeaderContext.Provider value={{ header, setHeader, description, setDescription }}>
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