"use client";

import { ColorSwatchPicker, ColorSwatchPickerItem } from './colorswatpicker';
import { Color } from 'react-aria-components';
import { Label } from '../textfield/field';

interface ColorSwatchGroupProps {
    ariaLabel: string;
    label: string;
    color: Color;
    onChange: (color: Color) => void;
}

export default function ColorSwatchGroup({ ...props }: ColorSwatchGroupProps) {
    return (
        <>
            <Label>{props.label}</Label>
            <ColorSwatchPicker aria-label={props.ariaLabel} value={props.color} onChange={props.onChange} className="grid grid-cols-7 gap-2 my-4 mx-4">
                <ColorSwatchPickerItem color="#DBDBDB" />
                <ColorSwatchPickerItem color="#A00" />
                <ColorSwatchPickerItem color="#f80" />
                <ColorSwatchPickerItem color="#080" />
                <ColorSwatchPickerItem color="#08f" />
                <ColorSwatchPickerItem color="#088" />
                <ColorSwatchPickerItem color="#008" />
            </ColorSwatchPicker>
        </>
    );
}