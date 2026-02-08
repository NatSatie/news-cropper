"use client";

import { useState } from 'react';
import { Button } from './../button/button';
import { ColorSwatchPicker, ColorSwatchPickerItem } from './colorswatpicker';
import { Color } from 'react-aria-components';
import { Label } from '../textfield/field';
import { ColorPicker } from '../colorpicker/colorpicker';

interface ColorSwatchGroupProps {
    ariaLabel: string;
    label: string;
    defaultColor: Color;
    onChange: (color: Color) => void;
    colors: (Color | string)[];
}

export default function ColorSwatchGroup({ ...props }: ColorSwatchGroupProps) {
    const [customColor, setCustomColor] = useState<Color>(props.defaultColor);
    const gridColSize = props.colors.length > 0 ? props.colors.length.toString() : '1';
    return (
        <>
            <Label>{props.label}</Label>
            <ColorSwatchPicker aria-label={props.ariaLabel} value={props.defaultColor} onChange={props.onChange} className={`grid grid-cols-${gridColSize} grid-rows-1 gap-2 my-4 mx-4`}>
                {props.colors.map((color) => (
                    <ColorSwatchPickerItem key={color.toString()} color={color} />
                ))}
            </ColorSwatchPicker>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                <Button onClick={() => customColor != null && props.onChange(customColor)}> Add Customized color </Button>
                <ColorPicker defaultValue={props.defaultColor} onChange={setCustomColor} />
            </div>
        </>
    );
}