import React from 'react';
import { Helmet } from 'react-helmet-async';

function MetaTags({ Title, description, imageUrl, canonicalUrl, headTitle, descriptionContent, JSstyle }) {
    return (
        <Helmet>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@workhelper"/>
            <meta name="twitter:title" content={Title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />
            <link rel="canonical" href={canonicalUrl} />
            <title>{headTitle}</title>
            <meta name="description" content={descriptionContent} />
        </Helmet>
    );
}

export default MetaTags;

