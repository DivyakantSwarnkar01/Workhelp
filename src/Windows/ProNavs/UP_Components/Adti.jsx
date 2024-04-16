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
        <button className='text-white font-bold py-2 px-4 border rounded bg-gradient-to-r from-emerald-300 to-lime-500 hover:from-blue-700 hover:to-pink-500 mr-4 mt-2' onClick={handlePost}>Post</button>
        <button className='bg-gradient-to-r from-red-300 to-red-900 hover:from-purple-400 hover:to-blue-800 mr-3 text-white font-bold py-2 px-4 border rounded'>Reset</button>
        </>
    );
});

export default Adit;
