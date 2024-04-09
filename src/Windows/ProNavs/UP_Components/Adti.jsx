import React, { useRef, useState } from "react";
import JoditEditor from 'jodit-react';
import { usePostStore } from './PostStore';

const Adit = React.memo(({ placeholder }) => {
    const editor = useRef(null);
    const { handleContentChange, postToFirestore } = usePostStore();

    const handlePost = () => {
        // You can perform any post actions here, such as saving to Firebase
        handleContentChange(editor.current.value)
        postToFirestore();
        
    };

    
 
    
    return (
        <>
        <JoditEditor
            ref={editor}
            config={{
                readonly: false,
                placeholder: placeholder || 'Start typing...',
                style: {
                    maxWidth: "700px", // Set maximum width here
                    maxHeight: "500px" // Set minimum height if needed
                }}}
            tabIndex={4}
        />
        <button className='bg-green-400 hover:bg-green-700 mr-3 text-white font-bold py-2 px-4 border border-lime-700 rounded' onClick={handlePost}>Post</button>
        <button className='bg-red-500 hover:bg-red-700 mr-3 text-white font-bold py-2 px-4 border border-lime-700 rounded'>Reset</button>
        </>
    );
});

export default Adit;
