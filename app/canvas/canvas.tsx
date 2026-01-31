'use client';

import { useHeaderText } from '../provider/header';
import { useImage } from '../provider/image';
import { Stage, Layer, Group, Image } from 'react-konva';
import useImageKonva from 'use-image';

export default function Canvas() {
    const { header, description } = useHeaderText();
    const { image } = useImage();

    const handleMouseOver = () => {
        document.body.style.cursor = 'move';
    };

    const handleMouseOut = () => {
        document.body.style.cursor = 'default';
    };

    return (
        <div style={{ width: '75%', height: '100vh', backgroundColor: 'lightblue' }}>
            <h1>{header}</h1>
            <h2>{description}</h2>
            <div style={{ width: '500px', height: '500px'}}>
                <Stage width={500} height={500} style={{ border: '1px solid black', backgroundColor: 'white' }}>
                    <Layer>
                        <Image
                            draggable
                            image={extractSrc(image)}
                            onMouseEnter={handleMouseOver}
                            onMouseLeave={handleMouseOut}
                            cornerRadius={20}/>
                    </Layer>
                </Stage>
            </div>
        </div>
    );
}

function extractSrc(img: string | null): CanvasImageSource | undefined{
    if (img === null || img === undefined) {
        return undefined;
    }
    return useImageKonva(img)[0] || undefined;
}