import React, { useRef, useEffect, useState } from "react";
import JoditEditor from 'jodit-react';
import { usePostStore } from './PostStore.js';
import eventBus from './ButtonClicked.js';
import { quillTitle } from "./AdPost.jsx";

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

        const handleButtonClicked = () => {
            
            postToFirestore(quillTitle, editor.current.value)

        };

        eventBus.on('ButtonClicked', handleButtonClicked);

        return () => {
            window.removeEventListener('documentWritten', handleDocumentWritten);
            eventBus.off('ButtonClicked', handleButtonClicked);
        };
    }, []);





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
        </>
    );
});

export default Adit;