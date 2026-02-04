'use client';

import { SingleStageType, useCanvas } from '../provider/canvas';
import stage from './stage/stage';
import Stage from './stage/stage';

export default function Canvas() {
    const canvas = useCanvas();
    console.log('Canvas render with stages:', canvas.canvas);
    return (
        <div style={{
            width: '75%',
            height: '100%',
            backgroundColor: 'grey',
            padding: '20px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            overflow: 'auto',
            gap: '20px',
        }}>
            {canvas.canvas.map((stage: SingleStageType) => (
                <Stage key={stage.width + 'x' + stage.height} width={stage.width} height={stage.height} />
            ))}
        </div>
    );
}