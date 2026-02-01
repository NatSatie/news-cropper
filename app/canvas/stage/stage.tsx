'use client';

import { useHeaderText } from '../../provider/header';
import { useImage } from '../../provider/image';
import { useColor } from '../../provider/color';
import { Stage as KonvaStage, Layer, Rect, Image, Text } from 'react-konva';
import {} from 'react-aria-components';
import useImageKonva from 'use-image';

export default function Stage() {
    const { header, description } = useHeaderText();
    const { background, footer } = useImage();
    const { color } = useColor();

    const handleMouseOver = () => {
        document.body.style.cursor = 'move';
    };

    const handleMouseOut = () => {
        document.body.style.cursor = 'default';
    };

    return (
        <div style={{
            width: '500px',
            height: '1200px',
            backgroundColor: 'white',
            flexDirection: 'column',
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'flex-start',
        }}> 
            <div style={{ fontSize: '24px', fontWeight: 'bold', backgroundColor: color.toString(), color: 'white' }}>{header}</div>
            {description}
            <KonvaStage width={500} height={500} style={{ border: '1px solid black', backgroundColor: 'white' }}>
                <Layer>
                    <Image
                        draggable
                        image={extractSrc(background)}
                        onMouseEnter={handleMouseOver}
                        onMouseLeave={handleMouseOut}
                        cornerRadius={20}/>
                </Layer>
            </KonvaStage>
            <KonvaStage width={500} height={500} style={{ border: '1px solid black', backgroundColor: 'white' }}>
                <Layer>
                    <Image
                        draggable
                        image={extractSrc(footer)}
                        onMouseEnter={handleMouseOver}
                        onMouseLeave={handleMouseOut}
                        cornerRadius={20}/>
                </Layer>
            </KonvaStage>
        </div>
    );
}

function extractSrc(img: string | null): CanvasImageSource | undefined{
    if (img === null || img === undefined) {
        return undefined;
    }
    return useImageKonva(img)[0] || undefined;
}