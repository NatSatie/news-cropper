'use client';

import { useCanvas } from '../provider/canvas';
import Stage from './stage/stage';

export default function Canvas() {
    const [canvas, setCanvas] = useCanvas();
    return (
        <div style={{ width: '75%', height: '100vh', backgroundColor: 'grey', padding: '20px', boxSizing: 'border-box' }}>
            {canvas.map((stage, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <Stage width={stage.width} height={stage.height} />
                </div>
            ))}
        </div>
    );
}