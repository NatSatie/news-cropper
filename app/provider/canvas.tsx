"use client";

import { createContext, useState, ReactNode, useContext } from 'react';

interface CanvasContextType {
    width: number;
    setWidth: (value: number) => void;
    height: number;
    setHeight: (value: number) => void;
}

export const CanvasContext = createContext<CanvasContextType | undefined>(undefined);

interface CanvasProviderProps {
    children: ReactNode;
}

export function CanvasProvider({ children }: CanvasProviderProps) {
    const [width, setWidth] = useState<number>(800);
    const [height, setHeight] = useState<number>(600);

    return (
        <CanvasContext.Provider value={{ width, setWidth, height, setHeight }}>
            {children}
        </CanvasContext.Provider>
    );
}

export function useCanvas() {
    const context = useContext(CanvasContext);
    if (context === undefined) {
        throw new Error('useCanvasText must be used within a CanvasProvider');
    }
    return context;
}