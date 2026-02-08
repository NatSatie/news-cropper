"use client";

import { TextField } from './textfield/textfield';
import { useHeaderText } from '../provider/header';
import ColorSwatchGroup from './colorswatpicker/colorswatchgroup';
import { useColor } from '../provider/color';
import { ChangeFont } from './changefont';

export function EditHeader() {
    const { text, setText } = useHeaderText();
    const { backgroundHeaderColor, setBackgroundHeaderColor, headerColor, setHeaderColor } = useColor();
    return (
        <>
            <TextField label="Main header" defaultValue={text} className="w-full mb-4" onChange={setText} />
            <ChangeFont />
            <ColorSwatchGroup
                ariaLabel='Header Background color'
                label='Header Background Color'
                defaultColor={backgroundHeaderColor}
                onChange={setBackgroundHeaderColor}
                colors={
                    [
                        "#DBDBDB",
                        "#f80",
                        "#08f",
                        "#008"
                    ]
                }
            />
            <ColorSwatchGroup
                ariaLabel='Header Font color'
                label='Header Font Color'
                defaultColor={headerColor}
                onChange={setHeaderColor}
                colors={
                    [
                        "#DBDBDB",
                        "#000000",
                    ]
                }
            />
        </>
    );
}