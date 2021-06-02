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

    const options = {
        settings: {
            overlayColor: "rgb(25, 136, 124)",
            autoplaySpeed: 1500,
            transitionSpeed: 900,
        },
        buttons: {
            backgroundColor: "#1b5245",
            iconColor: "rgba(126, 172, 139, 0.8)",
        },
        caption: {
            captionColor: "#a6cfa5",
            captionFontFamily: "Raleway, sans-serif",
            captionFontWeight: "300",
            captionTextTransform: "uppercase",
        }
    };

    return (
        <div>
            <div className='header'>Photo Gallery</div>
            <div className="container">
                { Gallery.map(photo => {
                    return(
                        <div key={photo.id} className='image-card'>
                            <SRLWrapper options={options}>
                                <a href={photo.url}>
                                    <img className='image' src={photo.url} alt='person'/>
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