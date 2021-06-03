import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from "./components/Gallery/Gallery"
import SimpleReactLightbox from 'simple-react-lightbox'

ReactDOM.render(
    <React.StrictMode>
        <SimpleReactLightbox>
            <Gallery />
        </SimpleReactLightbox>
    </React.StrictMode>,
    document.getElementById("root")
);
