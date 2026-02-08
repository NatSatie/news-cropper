"use client";

import { useState } from 'react';
import { useCanvas } from '../provider/canvas';
import { Slider } from './slider/slider';

// TODO: refactor method of scaling proportions so that it is more intuitive and less error-prone.
// Currently, if the user changes the header proportion, the image proportion will be changed by the same amount, which may not be what the user expects. Instead, we can calculate the new proportions based on the total available space and the new value of the changed element. For example, if the user changes the header proportion to 30%, we can calculate the remaining space (100% - 30% = 70%) and distribute it among the other elements based on their current proportions. This way, if the user changes one element, the others will adjust accordingly while maintaining their relative proportions.
export function ChangeProportions() {
    const { proportions, setProportions } = useCanvas();

    function handleProportionChange(element: 'header' | 'image' | 'description' | 'footer', newValue: number) {
        const diff = proportions[element] - newValue;
        if (element === 'header') {
            setProportions({
                header: newValue,
                image: proportions.image + diff,
                description: proportions.description,
                footer: proportions.footer
            });
        }
        if (element === 'image') {
            setProportions({
                header: proportions.header,
                image: newValue,
                description: proportions.description + diff,
                footer: proportions.footer
            });
        }
        if (element === 'description') {
            setProportions({
                header: proportions.header,
                image: proportions.image,
                description: newValue,
                footer: proportions.footer + diff
            });
        }
        if (element === 'footer') {
            setProportions({
                header: proportions.header,
                image: proportions.image,
                description: proportions.description,
                footer: newValue
            });
        }
    }

    return (
        <>
            <Slider label="Header"
                minValue={10}
                maxValue={50}
                value={proportions.header}
                onChange={(value: number) => {
                    handleProportionChange('header', value);
                }}
                step={1} />
            <Slider label="Image"
                minValue={10}
                maxValue={50}
                value={proportions.image}
                onChange={(value: number) => {
                    handleProportionChange('image', value);
                }}
                step={1} />
            <Slider label="Description"
                minValue={10}
                maxValue={50}
                value={proportions.description}
                onChange={(value: number) => {
                    handleProportionChange('description', value);
                }}
                step={1} />
            <Slider label="Footer"
                minValue={10}
                maxValue={30}
                value={proportions.footer}
                onChange={(value: number) => {
                    handleProportionChange('footer', value);
                }}
                step={1} />
        </>
    );
}