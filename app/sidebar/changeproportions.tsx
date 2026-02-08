"use client";

import { useCanvas } from '../provider/canvas';
import { Slider } from './slider/slider';

function calculateProportions({ element, newValue }: { element: 'header' | 'image' | 'description' | 'footer', newValue: number }) {
    const { proportions, setProportions } = useCanvas();
    if (element === 'header') {
        setProportions({
            header: newValue,
            image: proportions.image,
            description: proportions.description,
            footer: proportions.footer,
        });
    }
}

export function ChangeProportions() {
    const { proportions } = useCanvas();
    return (
        <>
            <Slider label="Header"
                minValue={20}
                maxValue={80}
                defaultValue={proportions.header}
                onChange={(value: number) => calculateProportions({ element: 'header', newValue: value })}
                step={5} />
        </>
    );
}