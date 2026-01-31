'use client';

import { useHeaderText } from '../provider/header';
import { useImage } from '../provider/image';

export default function Canvas() {
    const { header, setHeader, description } = useHeaderText();
    const { image } = useImage();

    return (
        <div style={{ width: '75%', height: '100vh', backgroundColor: 'lightblue' }}>
            <h1>{header}</h1>
            <h2>{description}</h2>
            <>{image}</>
        </div>
    );
}