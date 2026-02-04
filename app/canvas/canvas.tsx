'use client';

import { SingleStageType, useCanvas } from '../provider/canvas';
import Stage from './stage/stage';

export default function Canvas() {
    const canvas = useCanvas();
    return (
        <div style={{ width: '75%', height: '100%', backgroundColor: 'grey', padding: '20px', boxSizing: 'border-box' }}>
            {canvas.map((stage: SingleStageType, index: number) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <Stage width={stage.width} height={stage.height} />
                </div>
            ))}
        </div>
    );
}