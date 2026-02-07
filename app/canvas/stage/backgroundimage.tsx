'use client';

import { useImage } from '../../provider/image';
import { useColor } from '../../provider/color';
import Description from '../description/description';
import Header from '../header/header';
import { Stage as KonvaStage, Layer, Rect, Image, Text } from 'react-konva';
import { } from 'react-aria-components';
import useImageKonva from 'use-image';

interface BackgroundImageProps {
    width: number;
    height: number;
}

export function BackgroundImage({ ...props }: BackgroundImageProps) {
    const { background } = useImage();
    const [img] = useImageKonva(background || '');
    const handleMouseOver = () => {
        document.body.style.cursor = 'move';
    };

    const handleMouseOut = () => {
        document.body.style.cursor = 'default';
    };
    return (
        // Stage is only allowed to occupy half of the height of the Stage component
        <KonvaStage width={props.width} height={props.height / 2} style={{ border: 'none', backgroundColor: 'white' }}>
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