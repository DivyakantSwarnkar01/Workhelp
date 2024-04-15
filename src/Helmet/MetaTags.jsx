import React from 'react';
import { Helmet } from 'react-helmet-async';

function MetaTags({ Title, description, imageUrl, canonicalUrl }) {
    return (
        <Helmet>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@workhelper"/>
            <meta name="twitter:title" content={Title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />
            <link rel="canonical" href={canonicalUrl} />
        </Helmet>
    );
}

export default MetaTags;

