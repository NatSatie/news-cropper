'use client';

import { useImage } from '../../provider/image';
import Description from '../description/description';
import Header from '../header/header';
import { Stage as KonvaStage, Layer, Rect, Image, Text } from 'react-konva';
import { } from 'react-aria-components';
import useImageKonva from 'use-image';
import { BackgroundImage } from './backgroundimage';

interface StageProps {
    width: number;
    height: number;
}

export default function Stage({ ...props }: StageProps) {
    return (
        <div style={{
            width: props.width.toString() + 'px',
            height: props.width.toString() + 'px',
            backgroundColor: 'white',
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
        }}>
            <Header />
            <BackgroundImage width={props.width} height={props.height} />
            <Description />
            <FooterLogo width={props.width} height={props.height} />
        </div>
    );
}

interface FooterProps {
    width: number;
    height: number;
}

function FooterLogo({ ...props }: FooterProps) {
    const { footer } = useImage();
    const [img] = useImageKonva(footer || '');
    const handleMouseOver = () => {
        document.body.style.cursor = 'move';
    };

    const handleMouseOut = () => {
        document.body.style.cursor = 'default';
    };
    return (
        <KonvaStage width={props.width} height={props.height / 3} style={{ border: 'none', backgroundColor: 'grey' }}>
            <Layer>
                {img && (
                    <Image
                        image={img}
                        draggable
                        onMouseEnter={handleMouseOver}
                        onMouseLeave={handleMouseOut}
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