'use client';

import Stage from './stage/stage';

export default function Canvas() {
    return (
        <div style={{ width: '75%', height: '100vh', backgroundColor: 'grey' , padding: '20px', boxSizing: 'border-box' }}>
            <Stage />
        </div>
    );
}