import React, { useState } from 'react';
import AdDes from './AdDes';

const PostFire = () => {
    const [description, setDescription] = useState('');

    const handleDescriptionChange = (content) => {
        setDescription(content);
    };

    return (
        <div>
            <h1>Blog Description Editor</h1>
            <AdDes initialValue={description} onContentChange={handleDescriptionChange} />
            <button onClick={() => console.log('Description:', description)}>Submit</button>
        </div>
    );
};

export default PostFire;
