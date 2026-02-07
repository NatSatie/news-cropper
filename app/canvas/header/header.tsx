'use client';

import { useHeaderText } from '../../provider/header';
import { useImage } from '../../provider/image';
import { useColor } from '../../provider/color';
import { } from 'react-aria-components';
import { Inter, Roboto } from 'next/font/google';
import { fontOptions } from '../fonthelper';

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
        color: props.color,
        width: '100%',
        padding: '10px',
    });
};

export default function Header() {
    const { text, fontFamily } = useHeaderText();
    const { backgroundHeaderColor, headerColor } = useColor();

    console.log('Header font family:', fontFamily);
    return (
        <div style={HeaderStyle({
            backgroundColor: backgroundHeaderColor ? backgroundHeaderColor.toString() : 'white',
            color: headerColor ? headerColor.toString() : 'black',
            fontFamily: fontFamily || fontOptions[0]?.variable || 'var(--font-inter)',
        }
        )}>{text}</div>
    );
}