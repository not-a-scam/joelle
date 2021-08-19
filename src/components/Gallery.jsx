import React from 'react';
import ImgRow from './ImgRow';
import layersImg from '../images/gallery/layers.png';
import layersFillerImg from '../images/gallery/layers-filler.png';
import extensionsImg from '../images/gallery/extensions.png';
import extensionsFillerImg from '../images/gallery/extensions-filler.png';
import primaryImg from '../images/gallery/primary.png';
import primaryFillerImg from '../images/gallery/primary-filler.png';
import chairImg from '../images/gallery/gallery.png';
import chairFillerImg from '../images/gallery/3001-filler.png';
import homeImg from '../images/gallery/home.png';
import homeFillerImg from '../images/gallery/home-filler.png';
import growingUpImg from '../images/gallery/growing-up.png';
import growingUpFillerImg from '../images/gallery/growing-up-filler.png';
import memoriesImg from '../images/gallery/memories.png';

const imgs = [
    "x",
    [
        "y",
        [
            "x",
            {imgs: [{img: layersImg, isFiller: false}, {img: layersFillerImg, isFiller: true} ], isX: false},
            {imgs: [{img: extensionsImg, isFiller: false}, {img: extensionsFillerImg, isFiller: true}], isX: true},
            {imgs: [{img: primaryImg, isFiller: false}, {img: primaryFillerImg, isFiller: true}], isX: false}
        ],
        {imgs: [{img: chairImg,isFiller: false}, {img: chairFillerImg, isFiller: true}], isX: false}
    ], 
    [
        "y",
        {imgs: [{img: homeImg, isFiller: false}, {img: homeFillerImg, isFiller: true}], isX: true},
        {imgs: [{img: growingUpFillerImg, isFiller: true}, {img: growingUpImg, isFiller: false}], isX: true},
        {imgs: [{img: memoriesImg, isFiller: true}], isX: false}
    ]
];

function createGallery(obj) {

    if(Array.isArray(obj)){
        const newObj = <div className={obj[0] === "x"? "x-row": "y-row"}>
            {obj.slice(1).map(subObj => {
                return createGallery(subObj);
            })}
        </div>
        return newObj;
    }

    return <ImgRow imgs={obj.imgs} isX={obj.isX} />;

}

function Gallery() {
    return (
        <section id="gallery">
            {createGallery(imgs)}
        </section>
    );
}

export default Gallery;