"use client";

import { createContext, useState, ReactNode, useContext } from 'react';

interface SingleStageType {
    width: number;
    height: number;
}

interface CanvasContextType {
    canvas: SingleStageType[];
    setCanvas: (canvas: SingleStageType[]) => void;
}

export const CanvasContext = createContext<CanvasContextType | undefined>(undefined);

interface CanvasProviderProps {
    children: ReactNode;
}

export function CanvasProvider({ children }: CanvasProviderProps) {
    const [canvas, setCanvas] = useState<SingleStageType[]>([
        {
            width: 800,
            height: 600,
        } as SingleStageType
    ]);

    return (
        <CanvasContext.Provider value={{ canvas, setCanvas }}>
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