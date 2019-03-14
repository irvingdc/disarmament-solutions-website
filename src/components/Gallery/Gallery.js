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

    gallery1_es,
    gallery2_es,
    gallery3_es,
    gallery5_es,
    gallery6_es,
    gallery7_es,
    gallery8_es,
    gallery9_es,
    gallery10_es,
    gallery11_es,
    gallery12_es,
    gallery13_es,
    gallery14_es,
} from "../../images"

export default class MyComponent extends Component {
 
  render() {
    const imagesEn = [
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
    const imagesEs = [
        { original: gallery1_es },
        { original: gallery2_es },
        { original: gallery3_es },
        { original: gallery5_es },
        { original: gallery6_es },
        { original: gallery7_es },
        { original: gallery8_es },
        { original: gallery9_es },
        { original: gallery10_es },
        { original: gallery11_es },
        { original: gallery12_es },
        { original: gallery13_es },
        { original: gallery14_es },
    ]
 
    return (
        <div className={ classes.container }>
            <div className={ classes.content }>
                <ImageGallery 
                    items={ this.props.lan === "en" ? imagesEn : imagesEs } 
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