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
    const [text, setText] = useState<string>("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla, nunc non lacinia viverra, ipsum justo scelerisque erat, in sodales enim ligula tincidunt lorem. Nulla elementum neque vitae diam vehicula, in dapibus lorem lobortis. Phasellus risus ligula, elementum ut sollicitudin eget, pretium sed arcu. Aenean placerat augue in ipsum vulputate, eget finibus lectus porta. Vestibulum iaculis cursus magna, pharetra fermentum velit ultrices in. Maecenas auctor molestie ipsum vitae imperdiet. Curabitur et suscipit urna. Etiam porttitor magna eu tortor vestibulum, ac gravida risus aliquet. Ut et turpis lectus. Nulla quis ipsum at ante iaculis ultricies sit amet id ante. Quisque quis scelerisque lorem. Quisque vehicula luctus aliquet.");
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