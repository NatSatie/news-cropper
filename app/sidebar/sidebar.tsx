"use client";

import { DisclosureGroup } from 'react-aria-components';
import {Disclosure, DisclosureHeader, DisclosurePanel} from './disclosure/disclosure';
import { TextField } from './textfield/textfield';

export default function Sidebar() {
  return (
    <div style={{ width: '25%', height: '100vh' }}>
        <DisclosureGroup allowsMultipleExpanded={true} expandedKeys={["global", "style", "background", "footer"]}>
            <Disclosure id="global" defaultExpanded>
                <DisclosureHeader>Global content</DisclosureHeader>
                <DisclosurePanel>
                    <TextField label="Main header" placeholder="My Awesome Post" className="w-full mb-4" />
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