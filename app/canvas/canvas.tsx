'use client';

import { useState } from 'react';
import { useHeaderText } from '../provider/header';

export default function Canvas() {
    const { header, setHeader } = useHeaderText();

    useState(() => {
        // Just to illustrate that we can use setHeader here if needed
    }, [header]);

    return (
        <div style={{ width: '75%', height: '100vh', backgroundColor: 'lightblue' }}>
            {/* content= */}
            <h1>{header}</h1>
        </div>
    );
}