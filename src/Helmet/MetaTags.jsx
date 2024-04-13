import React from 'react';
import { Helmet } from 'react-helmet-async';

function MetaTags({ Title, description, imageUrl }) {
    return (
        <Helmet>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@workhelper"/>
            <meta name="twitter:title" content={Title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />
        </Helmet>
    );
}

export default MetaTags;

