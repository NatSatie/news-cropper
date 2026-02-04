'use client';

import { SingleStageType, useCanvas } from '../provider/canvas';
import { Button } from '../sidebar/button/button';
import Stage from './stage/stage';

export default function Canvas() {
    const canvas = useCanvas();
    return (
        <div style={{
            width: '75%',
            height: '100%',
            backgroundColor: 'grey',
            padding: '20px',
            boxSizing: 'content-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            overflow: 'auto',
            gap: '20px',
        }}>
            {canvas.canvas.map((stage: SingleStageType) => (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}>
                        <h2>{stage.name}</h2>
                        <Button onClick={
                            () => {
                                const newCanvas = canvas.canvas.filter(s => s !== stage);
                                canvas.setCanvas(newCanvas);
                            }
                        }> Delete Stage </Button>
                    </div>
                    <Stage key={stage.width + 'x' + stage.height} width={stage.width} height={stage.height} />
                </div>
            ))
            }
        </div >
    );
}