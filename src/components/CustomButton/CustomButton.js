import React from 'react';

const CustomButton = ({name, activeImage}) => {
    return (
        <button onClick={() => activeImage()}>
            {name.toLowerCase()}
        </button>
    )
}

export default CustomButton;