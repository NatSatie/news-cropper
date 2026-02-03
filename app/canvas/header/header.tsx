'use client';

import { useHeaderText } from '../../provider/header';
import { useImage } from '../../provider/image';
import { useColor } from '../../provider/color';
import { } from 'react-aria-components';

interface HeaderStyleProps {
    backgroundColor: string;
    color: string;
    fontSize?: number;
    fontWeight?: string;
    fontFamily?: string;
};

function HeaderStyle({ ...props }: HeaderStyleProps) {
    return ({
        fontSize: '24px',
        fontWeight: 'bold',
        backgroundColor: props.backgroundColor,
        color: props.color
    });
};

export default function Header() {
    const { text } = useHeaderText();
    const { background } = useImage();
    const { color } = useColor();

    return (
        <div style={HeaderStyle({
            backgroundColor: background ? background.toString() : 'white',
            color: 'black'
        }
        )}>{text}</div>
    );
}