import React, {useState, useEffect} from 'react';
import "./Gallery.css"
import axios from "axios";
import config from "../../Helpers/config.json";
import {SRLWrapper} from "simple-react-lightbox";
import ImageCard from "../ImageCard/ImageCard";
import 'bootstrap/dist/css/bootstrap.css'

const Gallery = () => {
    const [Gallery, setGallery] = useState([]);
    const [currentState, setCurrentState] = useState(10);
    const [isPrevious, setIsPrevious] = useState(false);
    const [isNext, setIsNext] = useState(false);
    useEffect(() => {
        const loadUsers = async () => {
            await axios.get(`${config.apiUrl}/photos`)
                .then(response => {
                    setGallery(response.data)
                });
        };
        loadUsers();
    }, []);
    
    useEffect(() => {
        currentState < Gallery.length &&  setIsPrevious(true);
        currentState >= 0 && setIsNext(true)
    }, [currentState, Gallery.length])


    const previousImage = () => {
        setCurrentState(currentState - 1)
    }

    const nextImage = () => {
        setCurrentState(currentState + 1)
    }

    return (
        <div>
            <div className='header'>Photo Gallery</div>
            <div className='container'>
                <div className='btn-group'>
                    <div className='previous'>
                        {
                            isPrevious && <button type="button" className="btn btn-primary btn-previous" onClick={previousImage}>Previous</button>
                        }
                    </div>
                    <div className='next'>
                        {
                            isNext && <button type="button" className="btn btn-primary btn-next" onClick={nextImage}>Next</button>
                        }
                    </div>
                </div>
                <div className='image-card'>
                    {Gallery && <SRLWrapper><ImageCard gallery={Gallery[currentState]}/></SRLWrapper>}
                </div>
            </div>

        </div>
    )
}


export default Gallery;