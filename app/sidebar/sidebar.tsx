"use client";

import { useState } from 'react';
import { DisclosureGroup } from 'react-aria-components';
import { Disclosure, DisclosureHeader, DisclosurePanel } from './disclosure/disclosure';
import { TextField } from './textfield/textfield';
import { useHeaderText } from '../provider/header';
import { useDescriptionText } from '../provider/description';
import FileUploader from './dropzone/fileuploader';
import ColorSwatchGroup from './colorswatpicker/colorswatchgroup';
import { AddStage } from './addstage';
import { useColor } from '../provider/color';

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

export default function Sidebar() {
    let [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set(["global", "style", "background", "footer", "add-stage"]));
    const { backgroundHeaderColor, setBackgroundHeaderColor } = useColor();
    return (
        <div style={{ width: '25%', height: '100vh' }}>
            <DisclosureGroup
                allowsMultipleExpanded={true}
                expandedKeys={expandedKeys}
                onExpandedChange={(keys) => setExpandedKeys(new Set(keys as Iterable<string>))}
            >
                <Disclosure id="global" defaultExpanded>
                    <DisclosureHeader>Header</DisclosureHeader>
                    <DisclosurePanel>
                        <EditHeader />
                        <ColorSwatchGroup
                            ariaLabel='Header Background color'
                            label='Header Background Color'
                            color={backgroundHeaderColor}
                            onChange={setBackgroundHeaderColor}
                        />
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure id="background" defaultExpanded>
                    <DisclosureHeader>Background images</DisclosureHeader>
                    <DisclosurePanel >
                        <FileUploader fileType='background' />
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure id="style" defaultExpanded>
                    <DisclosureHeader>Description</DisclosureHeader>
                    <DisclosurePanel>
                        <EditDescription />
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