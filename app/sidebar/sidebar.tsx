"use client";

import {Disclosure, DisclosureHeader, DisclosurePanel} from './disclosure/disclosure';

export default function Sidebar() {
  return (
    <div style={{ width: '25%', height: '100vh', backgroundColor: 'grey' }}>
        <Disclosure>
            <DisclosureHeader>Files</DisclosureHeader>
            <DisclosurePanel>Files content</DisclosurePanel>
        </Disclosure>
    </div>
  );
}