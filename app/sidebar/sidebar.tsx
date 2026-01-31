"use client";

import { DisclosureGroup } from 'react-aria-components';
import {Disclosure, DisclosureHeader, DisclosurePanel} from './disclosure/disclosure';
import { TextField } from './textfield/textfield';
import { useHeaderText } from '../provider/header';

export default function Sidebar() {
    const { header, setHeader } = useHeaderText();
    return (
        <div style={{ width: '25%', height: '100vh' }}>
            <DisclosureGroup allowsMultipleExpanded={true} expandedKeys={["global", "style", "background", "footer"]}>
                <Disclosure id="global" defaultExpanded>
                    <DisclosureHeader>Global content</DisclosureHeader>
                    <DisclosurePanel>
                        <TextField label="Main header" defaultValue={header} className="w-full mb-4" onChange={setHeader} />
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure id="style" defaultExpanded>
                    <DisclosureHeader>Typography and Style</DisclosureHeader>
                    <DisclosurePanel>Files content</DisclosurePanel>
                </Disclosure>
                <Disclosure id="background" defaultExpanded>
                    <DisclosureHeader>Background images</DisclosureHeader>
                    <DisclosurePanel>Files content</DisclosurePanel>
                </Disclosure>
                <Disclosure id="footer" defaultExpanded>
                    <DisclosureHeader>Footer and Logos </DisclosureHeader>
                    <DisclosurePanel>Files content</DisclosurePanel>
                </Disclosure>
            </DisclosureGroup>
        </div>
    );
}