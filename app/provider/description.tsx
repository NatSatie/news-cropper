"use client";

import { createContext, useState, ReactNode, useContext } from 'react';

interface DescriptionContextType {
    text: string;
    setText: (value: string) => void;
    fontSize?: number;
    setFontSize?: (value: number) => void;
    fontWeight?: string;
    setFontWeight?: (value: string) => void;
    fontFamily?: string;
    setFontFamily?: (value: string) => void;
}

export const DescriptionContext = createContext<DescriptionContextType | undefined>(undefined);

interface DescriptionProviderProps {
    children: ReactNode;
}

export function DescriptionProvider({ children }: DescriptionProviderProps) {
    const [text, setText] = useState<string>("My Awesome Post Title");
    const [fontSize, setFontSize] = useState<number>(24);
    const [fontWeight, setFontWeight] = useState<string>("bold");
    const [fontFamily, setFontFamily] = useState<string>("Arial");

    return (
        <DescriptionContext.Provider value={{ text, setText, fontSize, setFontSize, fontWeight, setFontWeight, fontFamily, setFontFamily }}>
            {children}
        </DescriptionContext.Provider>
    );
}

export function useDescriptionText() {
    const context = useContext(DescriptionContext);
    if (context === undefined) {
        throw new Error('useDescriptionText must be used within a DescriptionProvider');
    }
    return context;
}