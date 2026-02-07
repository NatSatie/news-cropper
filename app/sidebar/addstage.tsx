"use client";

import { useState } from 'react';
import { TextField } from './textfield/textfield';
import { SingleStageType, useCanvas } from '../provider/canvas';
import { Button } from './button/button';

export function AddStage() {
    const [stageName, setStageName] = useState<string>("my new stage");
    const [width, setWidth] = useState<string>("500");
    const [height, setHeight] = useState<string>("500");
    const { canvas, setCanvas } = useCanvas();
    return (
        <div>
            <TextField label="Stage name" defaultValue={"my new stage"} className="w-full mb-4" onChange={setStageName} />
            <TextField label="Width" defaultValue={"500"} className="w-full mb-4" onChange={setWidth} />
            <TextField label="Height" defaultValue={"500"} className="w-full mb-4" onChange={setHeight} />
            <Button onClick={
                () => {
                    setCanvas(canvas.concat([{ name: stageName, width: Number(width), height: Number(height) } as SingleStageType]));
                }
            }> Add Stage </Button>
        </div>
    );
}