"use client";

import { useState } from 'react';
import { DisclosureGroup } from 'react-aria-components';
import { Disclosure, DisclosureHeader, DisclosurePanel } from './disclosure/disclosure';
import { TextField } from './textfield/textfield';
import { useHeaderText } from '../provider/header';
import { useDescriptionText } from '../provider/description';
import FileUploader from './dropzone/fileuploader';
import ColorSwatchGroup from './colorswatpicker/colorswatchgroup';
import { SingleStageType, useCanvas } from '../provider/canvas';
import { Button } from './button/button';

function EditHeader() {
    const { text, setText } = useHeaderText();
    return (
        <TextField label="Main header" defaultValue={text} className="w-full mb-4" onChange={setText} />
    );
}

function EditDescription() {
    const { text, setText } = useDescriptionText();
    return (
        <TextField label="Description" defaultValue={text} className="w-full mb-4" onChange={setText} />
    );
}

function AddStage() {
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

export default function Sidebar() {
    let [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set(["global", "style", "background", "footer", "add-stage"]));
    return (
        <div style={{ width: '25%', height: '100vh' }}>
            <DisclosureGroup
                allowsMultipleExpanded={true}
                expandedKeys={expandedKeys}
                onExpandedChange={(keys) => setExpandedKeys(new Set(keys as Iterable<string>))}
            >
                <Disclosure id="global" defaultExpanded>
                    <DisclosureHeader>Global content</DisclosureHeader>
                    <DisclosurePanel>
                        <EditHeader />
                        <EditDescription />
                        <ColorSwatchGroup />
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure id="style" defaultExpanded>
                    <DisclosureHeader>Typography and Style</DisclosureHeader>
                    <DisclosurePanel>Files content</DisclosurePanel>
                </Disclosure>
                <Disclosure id="background" defaultExpanded>
                    <DisclosureHeader>Background images</DisclosureHeader>
                    <DisclosurePanel >
                        <FileUploader fileType='background' />
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure id="footer" defaultExpanded>
                    <DisclosureHeader>Footer and Logos </DisclosureHeader>
                    <DisclosurePanel >
                        <FileUploader fileType='footer' />
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure id="add-stage" defaultExpanded>
                    <DisclosureHeader>Add new Stage</DisclosureHeader>
                    <DisclosurePanel>
                        <AddStage />
                    </DisclosurePanel>
                </Disclosure>
            </DisclosureGroup>
        </div>
    );
}