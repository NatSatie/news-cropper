'use client';

import { useImage } from '../../provider/image';
import Description from '../description/description';
import Header from '../header/header';
import { Stage as KonvaStage, Layer, Rect, Image, Text } from 'react-konva';
import { } from 'react-aria-components';
import useImageKonva from 'use-image';
import { useCanvas } from '../../provider/canvas';
import { BackgroundImage } from './backgroundimage';

interface StageProps {
    width: number;
    height: number;
}

export default function Stage({ ...props }: StageProps) {
    const { proportions } = useCanvas();
    console.log("Height: " + Math.floor(props.height * proportions.header / 100));
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
            <Header height={proportions.header} />
            <BackgroundImage width={props.width} height={proportions.image} />
            <Description height={proportions.description} />
            <FooterLogo width={props.width} height={proportions.footer} />
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
        <KonvaStage width={props.width} height={props.height} style={{ border: 'none', backgroundColor: 'grey', height: props.height.toString() + '%', }}>
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