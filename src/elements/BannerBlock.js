import React from 'react';

const BannerBlock = ({ showTitle, callToActionLink, file, title }) => {

    return (
        <div className="content-element__content">
            <h4>Banner block</h4>
            {showTitle && 
                <h2 className="content-block__title">{title}</h2>
            }
        </div>

    )
};

export default BannerBlock;