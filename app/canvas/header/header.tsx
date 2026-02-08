'use client';

import { useHeaderText } from '../../provider/header';
import { useImage } from '../../provider/image';
import { useColor } from '../../provider/color';
import { parseColor } from 'react-aria-components';
import { Inter, Roboto } from 'next/font/google';
import { fontOptions } from '../fonthelper';

export default function Header({ height }: { height: number }) {
    const { text, fontFamily } = useHeaderText();
    const { backgroundHeaderColor, headerColor } = useColor();

    return (
        <div style={{
            fontSize: '24px',
            fontWeight: 'bold',
            backgroundColor: backgroundHeaderColor.toString(),
            color: headerColor.toString(),
            width: '100%',
            padding: '10px',
            height: height.toString() + '%',
        }}>
            <h1 style={{ fontFamily: `var(${fontFamily || '--font-inter'})`, margin: 0 }}>
                {text}
            </h1>
        </div>
    );
}