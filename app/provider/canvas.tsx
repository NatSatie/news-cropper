"use client";

import { createContext, useState, ReactNode, useContext } from 'react';
import { JSX } from 'react/jsx-runtime';

export interface SingleStageType {
    name: string
    width: number;
    height: number;
}

interface CanvasContextType {
    map(arg0: (stage: SingleStageType, index: number) => ReactNode): ReactNode;
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
            name: 'Demo Small',
            width: 800,
            height: 600,
        } as SingleStageType,
        {
            name: 'Demo Saure Large',
            width: 1200,
            height: 1200,
        } as SingleStageType
    ],);

    return (
        <CanvasContext.Provider value={{ canvas, setCanvas, map: canvas.map }}>
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