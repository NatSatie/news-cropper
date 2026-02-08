"use client";

import { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import { JSX } from 'react/jsx-runtime';

export interface SingleStageType {
    name: string
    width: number;
    height: number;
}

interface ProportionsType {
    header: number;
    image: number;
    description: number;
    footer: number;
}

interface CanvasContextType {
    map(arg0: (stage: SingleStageType, index: number) => ReactNode): ReactNode;
    canvas: SingleStageType[];
    setCanvas: (canvas: SingleStageType[]) => void;
    proportions: ProportionsType;
    setProportions: (proportions: ProportionsType) => void;
}

export const CanvasContext = createContext<CanvasContextType | undefined>(undefined);

interface CanvasProviderProps {
    children: ReactNode;
}

export function CanvasProvider({ children }: CanvasProviderProps) {
    const [canvas, setCanvas] = useState<SingleStageType[]>([
        {
            name: 'Demo Small',
            width: 400,
            height: 600,
        } as SingleStageType,
        {
            name: 'Demo Saure Large',
            width: 600,
            height: 600,
        } as SingleStageType
    ],);
    const [proportions, setProportions] = useState<ProportionsType>({
        header: 25,
        image: 25,
        description: 25,
        footer: 25,
    });

    return (
        <CanvasContext.Provider value={{ canvas, setCanvas, map: canvas.map, proportions, setProportions }}>
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