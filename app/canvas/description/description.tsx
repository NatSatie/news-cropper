'use client';

import { useDescriptionText } from '../../provider/description';
import { useImage } from '../../provider/image';
import { useColor } from '../../provider/color';
import { } from 'react-aria-components';

export default function Description({ height }: { height: number }) {
    const { text } = useDescriptionText();

    return (
        <div style={{
            fontSize: '16px',
            fontWeight: 'normal',
            backgroundColor: 'white',
            color: 'black',
            height: height,
        }}>{text}</div>
    );
}