"use client";

import { useHeaderText } from '../provider/header';
import { Select, SelectItem } from './select/select';
import { fontOptions } from '../canvas/fonthelper';

export function ChangeFont() {
    const { fontFamily, setFontFamily } = useHeaderText();

    const handleFontChange = (key: React.Key | null) => {
        console.log('Selected font:', key);
        if (key !== null && setFontFamily) {
            const index = fontOptions.findIndex((option) => option.name === key);
            if (index !== -1) {
                console.log('Previous:', fontFamily);
                //console.log('Font variable:', fontOptions[index].variable);
                setFontFamily(fontOptions[index].name);
                console.log('Font family set to:', fontFamily);
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