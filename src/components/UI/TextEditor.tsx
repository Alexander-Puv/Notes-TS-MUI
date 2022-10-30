import React, { FC, useState } from 'react';
import {RichTextEditor} from '@mantine/rte';
import { EditorContainer } from '../styledComponents/EditorContainer';

export const TextEditor: FC = () => {
    const [value, onChange] = useState('');

    return (
        <EditorContainer>
            <RichTextEditor
                value={value} onChange={onChange}
                controls={[
                    ['bold', 'strike', 'italic', 'underline', 'link'],
                    ['h1', 'h2', 'h3'],
                    ['unorderedList', 'orderedList'],
                    ['alignLeft', 'alignCenter', 'alignRight'],
                    ['clean']
                ]}
                style={{border: 0}}
            />
        </EditorContainer>
    );
}