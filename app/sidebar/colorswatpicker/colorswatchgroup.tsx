"use client";

import {ColorSwatchPicker, ColorSwatchPickerItem} from './colorswatpicker';
import { useColor } from '../../provider/color';

export default function ColorSwatchGroup() {
    let { color, setColor } = useColor();
    return (
        <ColorSwatchPicker aria-label="Background color" value={color} onChange={setColor} className="grid grid-cols-7 gap-2 my-4 mx-4">
            <ColorSwatchPickerItem color="#DBDBDB" />
            <ColorSwatchPickerItem color="#A00" />
            <ColorSwatchPickerItem color="#f80" />
            <ColorSwatchPickerItem color="#080" />
            <ColorSwatchPickerItem color="#08f" />
            <ColorSwatchPickerItem color="#088" />
            <ColorSwatchPickerItem color="#008" />
        </ColorSwatchPicker>
    );
}