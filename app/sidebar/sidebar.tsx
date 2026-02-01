"use client";

import { useState } from 'react';
import { DisclosureGroup } from 'react-aria-components';
import {Disclosure, DisclosureHeader, DisclosurePanel} from './disclosure/disclosure';
import { TextField } from './textfield/textfield';
import { useHeaderText } from '../provider/header';
import FileUploader from './dropzone/fileuploader';
import ColorSwatchGroup from './colorswatpicker/colorswatchgroup';

export default function Sidebar() {
    const { header, setHeader, description, setDescription } = useHeaderText();
    let [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set(["global", "style", "background", "footer"]));
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
                        <TextField label="Main header" defaultValue={header} className="w-full mb-4" onChange={setHeader} />
                        <TextField label="Description" isTextArea className="react-aria-TextArea inset" defaultValue={description} onChange={setDescription} />
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
            </DisclosureGroup>
        </div>
    );
}