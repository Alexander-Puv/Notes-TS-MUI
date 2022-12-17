import { RichTextEditor } from '@mantine/rte';
import React, { FC } from 'react';
import { EditorContainer } from '../styledComponents/EditorContainer';

interface TextEditorProps {
    text: string,
    setText: React.Dispatch<React.SetStateAction<string>>
}

export const TextEditor: FC<TextEditorProps> = ({text, setText}) => {
    return (
        <EditorContainer>
            <RichTextEditor
                value={text} onChange={setText}
                controls={[
                    ['bold', 'strike', 'italic', 'underline', 'link'],
                    ['h1', 'h2', 'h3'],
                    ['unorderedList', 'orderedList'],
                    ['alignLeft', 'alignCenter', 'alignRight'],
                    ['clean']
                ]}
                style={{border: 0}}
                placeholder='Note text'
            />
            <div className='toolsAreFine'></div>
        </EditorContainer>
    );
}

// interface TextEditorProps {
//     text: RefObject<any>
// }

// export const TextEditor: FC<TextEditorProps> = ({text}) => {
//     console.log(text);
    
//     return (
//         <EditorContainer>
//             <RichTextEditor
//                 ref={text}
//                 controls={[
//                     ['bold', 'strike', 'italic', 'underline', 'link'],
//                     ['h1', 'h2', 'h3'],
//                     ['unorderedList', 'orderedList'],
//                     ['alignLeft', 'alignCenter', 'alignRight'],
//                     ['clean']
//                 ]}
//                 style={{border: 0}}
//                 placeholder='Note text'
//             />
//             <div className='toolsAreFine'></div>
//         </EditorContainer>
//     );
// }