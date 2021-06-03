import React from 'react';

const ImageCard = ({gallery}) => {
    return (
        <div className='image-card'>
            {gallery &&
                <a href={gallery.url} data-attribute="">
                    <img className='image' src={gallery.url} alt='' />
                </a>
            }
        </div>
    )
}

export default ImageCard;