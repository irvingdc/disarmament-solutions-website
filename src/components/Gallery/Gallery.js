import React, { Component } from "react"
import ImageGallery from 'react-image-gallery';
import classes from "./Gallery.module.css"
import "react-image-gallery/styles/css/image-gallery.css"
import { 
    gallery1,
    gallery2,
    gallery3,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
    gallery13,
    gallery14,
} from "../../images"

export default class MyComponent extends Component {
 
  render() {
    const images = [
        { original: gallery1 },
        { original: gallery2 },
        { original: gallery3 },
        { original: gallery5 },
        { original: gallery6 },
        { original: gallery7 },
        { original: gallery8 },
        { original: gallery9 },
        { original: gallery10 },
        { original: gallery11 },
        { original: gallery12 },
        { original: gallery13 },
        { original: gallery14 },
    ]
 
    return (
        <div className={ classes.container }>
            <div className={ classes.content }>
                <ImageGallery 
                    items={images} 
                    showThumbnails={ false } 
                    showPlayButton={ false }
                    showNav={ false }
                    showBullets={ false }
                    showFullscreenButton={ false }
                    lazyLoad
                    autoPlay
                    slideDuration={ 600 }
                    slideInterval={ 2500 }
                />
            </div>
        </div>
    );
  }
}