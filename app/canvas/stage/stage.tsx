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
    return (
        <div style={{
            width: props.width,
            height: props.height,
            maxHeight: props.height,
            minHeight: props.height,
            backgroundColor: 'white',
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            boxSizing: 'border-box',
        }}>
            <Header height={Math.floor(proportions.header * props.height / 100)} />
            <BackgroundImage width={props.width} height={Math.floor(proportions.image * props.height / 100)} />
            <Description height={Math.floor(proportions.description * props.height / 100)} />
            <FooterLogo width={props.width} height={Math.floor(proportions.footer * props.height / 100)} />
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
        <KonvaStage width={props.width} height={props.height} style={{ border: 'none', backgroundColor: 'grey' }}>
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