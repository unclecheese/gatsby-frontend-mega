import React from 'react';

const ElementContent = ({showTitle, html, title }) => {

    return (
        <div className="content-element__content">
            <h4>Content block</h4>
            {showTitle && 
                <h2 className="content-block__title">{title}</h2>
            }
            <div dangerouslySetInnerHTML={{__html: html}} />
        </div>

    )
};

export default ElementContent;