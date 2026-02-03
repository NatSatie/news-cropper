'use client';

import { useDescriptionText } from '../../provider/description';
import { useImage } from '../../provider/image';
import { useColor } from '../../provider/color';
import { } from 'react-aria-components';

interface DescriptionStyleProps {
    backgroundColor: string;
    color: string;
    fontSize?: number;
    fontWeight?: string;
    fontFamily?: string;
};

function DescriptionStyle({ ...props }: DescriptionStyleProps) {
    return ({
        fontSize: '16px',
        fontWeight: 'normal',
        backgroundColor: props.backgroundColor,
        color: props.color
    });
};

export default function Description() {
    const { text } = useDescriptionText();
    const { color } = useColor();

    return (
        <div style={DescriptionStyle({
            backgroundColor: 'white',
            color: 'black'
        })}>{text}</div>
    );
}