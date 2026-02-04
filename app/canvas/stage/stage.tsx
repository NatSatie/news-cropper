'use client';

import { useImage } from '../../provider/image';
import { useColor } from '../../provider/color';
import Description from '../description/description';
import Header from '../header/header';
import { Stage as KonvaStage, Layer, Rect, Image, Text } from 'react-konva';
import { } from 'react-aria-components';
import useImageKonva from 'use-image';

interface StageProps {
    width: number;
    height: number;
}

export default function Stage({ width, height }: StageProps) {
    const { color } = useColor();

    return (
        <div style={{
            width: width.toString() + 'px',
            height: height.toString() + 'px',
            backgroundColor: 'white',
            flexDirection: 'column',
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'flex-start',
        }}>
            <Header />
            <BackgroundImage />
            <Description />
            <FooterLogo />
        </div>
    );
}


function BackgroundImage() {
    const { background } = useImage();
    const [img] = useImageKonva(background || '');
    const handleMouseOver = () => {
        document.body.style.cursor = 'move';
    };

    const handleMouseOut = () => {
        document.body.style.cursor = 'default';
    };
    return (
        <KonvaStage width={500} height={200} style={{ border: '1px solid black', backgroundColor: 'white' }}>
            <Layer>
                {img && (
                    <Image
                        image={img}
                        draggable
                        onMouseEnter={handleMouseOver}
                        onMouseLeave={handleMouseOut}
                        cornerRadius={20}
                    />
                )}
            </Layer>
        </KonvaStage>
    );
}

function FooterLogo() {
    const { footer } = useImage();
    const [img] = useImageKonva(footer || '');
    const handleMouseOver = () => {
        document.body.style.cursor = 'move';
    };

    const handleMouseOut = () => {
        document.body.style.cursor = 'default';
    };
    return (
        <KonvaStage width={100} height={100} style={{ border: '1px solid black', backgroundColor: 'white' }}>
            <Layer>
                {img && (
                    <Image
                        image={img}
                        draggable
                        onMouseEnter={handleMouseOver}
                        onMouseLeave={handleMouseOut}
                        cornerRadius={20}
                    />
                )}
            </Layer>
        </KonvaStage>
    );
}

function extractSrc(img: string | null): CanvasImageSource | undefined {
    if (img === null || img === undefined) {
        return undefined;
    }
    return useImageKonva(img)[0] || undefined;
}