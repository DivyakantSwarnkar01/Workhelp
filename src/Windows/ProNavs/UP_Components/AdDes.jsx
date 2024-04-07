// TinyMCEEditor.js
import React, { useRef, useEffect } from 'react';
import tinymce from 'tinymce/tinymce';

const AdDes = ({ initialValue, onContentChange }) => {
    const editorRef = useRef(null);

    useEffect(() => {
        tinymce.init({
            selector: `#${editorRef.current.id}`,
            plugins: 'autoresize',
            height: 500,
            setup: (editor) => {
                editor.on('change', () => {
                    const content = editor.getContent();
                    onContentChange(content);
                });
            },
        });

        return () => {
            tinymce.remove(`#${editorRef.current.id}`);
        };
    }, []);

    useEffect(() => {
        if (initialValue) {
            tinymce.get(editorRef.current.id).setContent(initialValue);
        }
    }, [initialValue]);

    return (
        <textarea
            ref={editorRef}
            id="tiny-mce-editor"
            defaultValue={initialValue}
        />
    );
};

export default AdDes;
