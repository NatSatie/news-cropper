'use client';

import {DropZone} from './dropzone';
import {Text} from 'react-aria-components';
import { useImage } from '../../provider/image';

export default function FileUploader() {
  const { image, setImage } = useImage();
  return (
    <DropZone
        className="w-full mb-4"
        getDropOperation={types => (
            ['text/plain', 'image/jpeg', 'image/png', 'image/gif'].some(t => types.has(t)) ? 'copy' : 'cancel'
        )}
        onDrop={async (event) => {
            // Find the first accepted item.
            let item = event.items.find(item => (
            (item.kind === 'text' && item.types.has('text/plain')) ||
            (item.kind === 'file' && item.type.startsWith('image/'))
            ));

            if (item?.kind === 'text') {
            let text = await item.getText('text/plain');
            setImage(text);
            } else if (item?.kind === 'file') {
            let file = await item.getFile();
            let url = URL.createObjectURL(file);
            setImage(url)
            }
      }}>
      <Text slot="label">
        {"Drop your image here"}
        <img src={image || ""} style={{maxHeight: 100, maxWidth: '100%'}} />
      </Text>
    </DropZone>
  );
}