import React, { useRef, useEffect, useState } from "react";
import JoditEditor from 'jodit-react';
import { usePostStore } from './PostStore';
import { quillTitle }  from './AdPost';


const Adit = React.memo(({ placeholder }) => {
    const editor = useRef(null);
    const { handleContentChange, postToFirestore, postTitle, postContent } = usePostStore();
    const [previousContent, setPreviousContent] = useState(postContent);

    useEffect(() => {
        const handleDocumentWritten = (event) => {
            const docId = event.detail;
            console.log('Document written with ID:', docId);
            alert(`Document written Successfully with ID: ${docId}`);
        };

        window.addEventListener('documentWritten', handleDocumentWritten);

        return () => {
            window.removeEventListener('documentWritten', handleDocumentWritten);
        };
    }, []);

    const handlePost = () => {
        
        postToFirestore(quillTitle, editor.current.value)
  };

    return (
        <>
        <JoditEditor
            ref={editor}
            config={{
                readonly: false,
                placeholder: placeholder || 'Start typing...',
                style: {
                    maxWidth: "700px",
                    maxHeight: "500px"
                }
            }}
            tabIndex={4}
        />
        <button className='bg-green-400 hover:bg-green-700 mr-3 text-white font-bold py-2 px-4 border border-lime-700 rounded' onClick={handlePost}>Post</button>
        <button className='bg-red-500 hover:bg-red-700 mr-3 text-white font-bold py-2 px-4 border border-lime-700 rounded'>Reset</button>
        </>
    );
});

export default Adit;
