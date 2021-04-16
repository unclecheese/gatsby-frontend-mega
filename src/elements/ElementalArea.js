import React from 'react';
import ElementContent from './ElementContent';
import FileBlock from "./FileBlock";
import BannerBlock from "./BannerBlock";

// Todo: Support dynamic element components 
const ElementalArea = ({ elements }) => {
    return (
        elements.map(element => {
            return (
                <div>
                    {element.__typename === `SS_ElementContent` &&
                        <ElementContent key={element.id} element={element} />
                    }
                    {element.__typename === `SS_FileBlock` &&
                        <FileBlock key={element.id} element={element} />
                    }
                    {element.__typename === `SS_BannerBlock` &&
                        <BannerBlock key={element.id} element={element} />
                    }
                </div>
                
            )
        })
    )
};

export default ElementalArea;