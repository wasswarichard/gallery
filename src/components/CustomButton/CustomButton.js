import React from 'react';

const CustomButton = ({name, activeImage}) => {
    return (
        <button type="button" className="btn btn-success" onClick={activeImage}>
            {name.toLowerCase()}
        </button>
    )
}

export default CustomButton;