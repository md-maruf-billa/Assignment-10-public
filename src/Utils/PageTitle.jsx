import React from 'react';
import { Helmet } from 'react-helmet';

const PageTitle = ({title}) => {
    return (
        <Helmet>
            <title>Canvas Creations | {title}</title>
        </Helmet>
    );
};

export default PageTitle;