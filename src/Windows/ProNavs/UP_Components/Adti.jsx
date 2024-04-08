import React, { useState, useRef, useMemo } from "react";
import JoditEditor from 'jodit-react';

const Adit = ({ placeholder }) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const config = useMemo(() => ({
        readonly: false, //all options from https://xdsoft.net/jodit/doc/
        placeholder: placeholder || 'Start typing...',
        style: {
            maxWidth: "700px", // Set maximum width here
            maxHeight: "500px" // Set minimum height if needed
          }
    }), [placeholder]);

    return (
        <>
        <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={4}
            onBlur={newContent => setContent(newContent)}
            onChange={newContent => setContent(newContent)}
        />
        <button className='bg-green-400 hover:bg-green-700 mr-3 text-white font-bold py-2 px-4 border border-lime-700 rounded'>Post</button>
        <button className='bg-red-500 hover:bg-red-700 mr-3 text-white font-bold py-2 px-4 border border-lime-700 rounded'>Reset</button>
        </>
    );
};

export default Adit;
