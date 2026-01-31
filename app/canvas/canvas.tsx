'use client';

import { useState } from 'react';
import { useHeaderText } from '../provider/header';

export default function Canvas() {
    const { header, setHeader } = useHeaderText();

    return (
        <div style={{ width: '75%', height: '100vh', backgroundColor: 'lightblue' }}>
            {/* content= */}
            <h1>{header}</h1>
        </div>
    );
}