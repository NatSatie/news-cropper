'use client';

import {useState} from 'react';
import {DropZone} from './dropzone';
import {Text} from 'react-aria-components';
import { useImage } from '../../provider/image';

interface FileUploaderProps {
  fileType: 'background' | 'footer';
}

export default function FileUploader({ fileType }: FileUploaderProps) {
  const { background, setBackground, footer, setFooter } = useImage();
  const [defaultMessageVisible, setDefaultMessageVisible] = useState<boolean>(true);
  return (
    <DropZone
        className="w-full mb-4"
        getDropOperation={types => (
            ['image/jpeg', 'image/png', 'image/gif'].some(t => types.has(t)) ? 'copy' : 'cancel'
        )}
        onDrop={async (event) => {
            // Find the first accepted item.
            let item = event.items.find(item => (
              (item.kind === 'file' && item.type.startsWith('image/'))
            ));
            if (item?.kind === 'file') {
              let file = await item.getFile();
              let url = URL.createObjectURL(file);
              fileType === 'background' ? setBackground(url) : setFooter(url);
              setDefaultMessageVisible(false);
            }
      }}>
      <Text slot="label">
        {defaultMessageVisible ? "Drop your image here" : ""}
        {fileType === 'background' ? FilePreview({image: background}) : FilePreview({image: footer})}
      </Text>
    </DropZone>
  );
}

function FilePreview({ image }: { image: string | null }) {
  return (
    <div>
      <img src={image || ""} style={{maxHeight: 100, maxWidth: '100%'}} />
    </div>
  );
}