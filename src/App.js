import React from 'react';
import Gallery from "./components/Gallery/Gallery"
import SimpleReactLightBox from 'simple-react-lightbox'

const  App = () => (
    <div>
        <SimpleReactLightBox>
            <Gallery/>
        </SimpleReactLightBox>
    </div>
);
export default App;

