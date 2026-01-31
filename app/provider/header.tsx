"use client";

import { createContext, useState, ReactNode, useContext } from 'react';

interface HeaderContextType {
  header: string;
  setHeader: (value: string) => void;
}

export const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

interface HeaderProviderProps {
  children: ReactNode;
}

export function HeaderProvider({ children }: HeaderProviderProps) {
  const [header, setHeader] = useState<string>("My Awesome Post");

  return (
    <HeaderContext.Provider value={{ header, setHeader }}>
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