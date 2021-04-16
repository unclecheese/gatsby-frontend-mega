import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const FileBlock = ({ showTitle, file, title }) => {
    const img = getImage(file?.localFile);
    return (
        <div className="content-element__content">
            <h4>File block</h4>
            {showTitle &&
                <h2 className="content-block__title">{title}</h2>
            }
            {img &&
                <GatsbyImage image={img} alt="image" />
            }
            {!img && file &&
                <div><a href={file.localFile.absolutePath}>download now</a></div>
            }
        </div>

    )
};

export default FileBlock;