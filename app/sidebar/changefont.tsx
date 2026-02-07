"use client";

import { useHeaderText } from '../provider/header';
import { Select, SelectItem } from './select/select';
import { fontOptions } from '../canvas/fonthelper';

export function ChangeFont() {
    const { fontFamily, setFontFamily } = useHeaderText();

    const handleFontChange = (key: React.Key | null) => {
        if (key !== null && setFontFamily) {
            const index = fontOptions.findIndex((option) => option.name === key);
            if (index !== -1) {
                setFontFamily(fontOptions[index].variable);
            }
        }
    };

    return (
        <div>
            <Select label='Font Family'
                defaultValue={fontFamily ? fontFamily : 'roboto'}
                description='Only Google Fonts are available.'
                onChange={handleFontChange}
                selectionMode='single'
            >
                {fontOptions.map((option) => (
                    <SelectItem id={option.name} value={option}>
                        {option.name}
                    </SelectItem>
                ))}
            </Select>
        </div >
    );
}