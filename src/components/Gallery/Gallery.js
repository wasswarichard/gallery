import React, {useState, useEffect} from 'react';
import "./Gallery.css"
import axios from "axios";
import config from "../../Helpers/config.json";
import {SRLWrapper} from "simple-react-lightbox";

const Gallery = () => {
    const [Gallery, setGallery] = useState([]);
    useEffect(() => {
        const loadUsers = async () => {
            await axios.get(`${config.apiUrl}/photos`)
                .then(response => {
                    setGallery(response.data)
                });
        };
        loadUsers();
    }, []);

    return (
        <div>
            <div className='header'>Photo Gallery</div>
            <div className="container">
                { Gallery.map( photo => {
                    return(
                        <div key={photo.id} className='image-card'>
                            <SRLWrapper>
                                <a href={photo.url}>
                                    <img className='image' src={photo.thumbnailUrl} alt='image'/>
                                </a>
                            </SRLWrapper>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}
export default Gallery;