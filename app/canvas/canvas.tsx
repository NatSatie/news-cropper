'use client';

import { SingleStageType, useCanvas } from '../provider/canvas';
import { Button } from '../sidebar/button/button';
import Stage from './stage/stage';

export default function Canvas() {
    const canvas = useCanvas();

    const handleOnDeleteCanvas = (stage: SingleStageType) => {
        const newCanvas = canvas.canvas.filter(s => s !== stage);
        canvas.setCanvas(newCanvas);
    }

    return (
        <div style={{
            width: '75%',
            height: '100%',
            backgroundColor: '#333333',
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
                            color: '#999999',
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '10px',
                            alignItems: 'center',
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: 'bold',
                            padding: '0 0 10px 0',
                        }}>
                        <h2>{stage.name} {stage.height} x {stage.width}</h2>
                        <Button
                            variant='destructive'
                            onClick={
                                () => handleOnDeleteCanvas(stage)
                            }> Delete Stage </Button>
                    </div>
                    <Stage key={stage.name} width={stage.width} height={stage.height} />
                </div>
            ))
            }
        </div >
    );
}