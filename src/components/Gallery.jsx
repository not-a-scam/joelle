import React, { useState } from 'react';
import ImgRow from './ImgRow';
import ImgCard from './ImgCard';
import { desktopGallery, focusImgs } from '../images';
import XRowCard from './XRowCard';
import YRowCard from './YRowCard';

const desktopImgs = [
    "x",
    [
        "y",
        [
            "x",
            {imgs: [
                {img: desktopGallery.layersImg, isFiller: false, id: 'layers'}, 
                {img: desktopGallery.layersFillerImg, isFiller: true, id: 'layersFiller'}
            ], isX: false},
            {imgs: [
                {img: desktopGallery.extensionsImg, isFiller: false, id: 'extensions'},
                {img: desktopGallery.extensionsFillerImg, isFiller: true, id: 'extensionsFiller'}
            ], isX: true},
            {imgs: [
                {img: desktopGallery.primaryFillerImg, isFiller: true, id: 'primaryFiller'},
                {img: desktopGallery.primaryImg, isFiller: false, id: 'primary'}
            ], isX: false}
        ],
        {imgs: [
            {img: desktopGallery.chairImg, isFiller: false, id: 'chair'},
            {img: desktopGallery.chairFillerImg, isFiller: true, id: 'chairFiller'}
        ], isX: false}
    ], 
    [
        "y",
        {imgs: [
            {img: desktopGallery.homeImg, isFiller: false, id: 'home'},
            {img: desktopGallery.homeFillerImg, isFiller: true, id: 'homeFiller'}
        ], isX: true},
        {imgs: [
            {img: desktopGallery.growingUpFillerImg, isFiller: true, id: 'growingUpFiller'},
            {img: desktopGallery.growingUpImg, isFiller: false, id: 'growingUp'}
        ], isX: true},
        {imgs: [
            {img: desktopGallery.memoriesImg, isFiller: false, id: 'memories'}
        ], isX: false}
    ]
];

const mobileCards = [
    {
        id: 'chair',
        orientation: 'x',
        imgs: [focusImgs.chair], 
        title: '3001', 
        content: 'Memories that stem from my childhood are explored. The chair is from my childhood where I layered newspaper articles on it,  taken from my birthday each year. Both major and minor headlines overlap one another to explore how the environment has shaped my identity.  Abstract shapes, taking the form of the numbers 3, 0, 0, and 1, are painted in bright colours. This marks my birthdate and acts as a continuation of  Memories where the colours come together to show the development of my identity.'
    },
    {
        id: 'home',
        orientation: 'y',
        imgs:[focusImgs.home],
        title: 'home',
        content: 'Following the theme of identity, the work looks at how memory plays into capturing images of a place that is significant to the development of my identity. This is seen through the gridded work, consisting of 56 individual photographs, all presenting a different area of the place. The use of yellow to focus on a certain area of the work illustrates the happy memories that came from it. Memory is used as part of the process to develop this large scale work.'
    },
    {
        id: 'growingUp',
        orientation: 'y',
        imgs:[focusImgs.growingUp],
        title: 'growing up',
        content: 'The work explores how when one grows up, there are many things that change around them. Using realism to express this, simple tasks can change drastically as one grows up and learns new skills. By collaging and printing these colour pencil works, it parallels the transferring of my knowledge and how it has developed over time. Additionally, the white circles block out certain aspects of each task, illustrating the gaps in my memory.'
    },
    {
        id: 'primary',
        orientation: 'y',
        imgs:[focusImgs.blue, focusImgs.red, focusImgs.yellow],
        title: 'primary',
        content: 'The work follows the theme of identity as it explores the primary figures in my life that have contributed to it. The three primary colours are associated with the people that are crucial to the development of my identity, with each colour creating a different experience and emotion. Tinted images are also printed onto the sides of the paintings, illustrating the memories that come with each person.'
    },
    {
        id: 'extensions',
        orientation: 'x',
        imgs:[focusImgs.extensions],
        title: 'extensions',
        content: 'The work follows the theme of identity and focuses on the many extensions of my identity. It illustrates how in different places and around different people, my definition of identity varies. The various shapes used are balanced in the composition, expressing how the various self-identities are inter-connected and  balance out each other. As such, the different portraits, taken up by various individuals are placed together to form an overarching image.'
    },
    {
        id: 'memories',
        orientation: 'x',
        imgs:[focusImgs.memories],
        title: 'memories',
        content: 'In the exploration of my theme, I looked into how my memories were categorised. 7 different coloured fabric shapes are arranged, each containing photos and objects from my childhood. Through this, I explore how I have categorised my memories, and how it has contributed to my future development. Looking into the objects in the work, a fusion of colours are seen in the work, indicating that these categories have come together to contribute to my development.'
    },
    {
        id: 'layers',
        orientation: 'x',
        imgs:[focusImgs.layers],
        title: 'layers',
        content: 'As one’s childhood is said to be the foundation of one’s development, the work investigates how childhood memories develop my identity. Comics are a representation of happy memories. As it overlaps more, the light coming from the lamp is dimmed, representing the darker memories. This is overlapped with self portraits that span across the years. It is cut up into smaller shapes and has missing gaps, signifying how while one’s childhood does develop one’s identity, it is never fully complete.'
    }

]

function createFullGallery(obj, onClick) {

    if(Array.isArray(obj)){
        const newObj = <div className={obj[0] === "x"? "x-row": "y-row"}>
            {obj.slice(1).map(subObj => {
                return createFullGallery(subObj, onClick);
            })}
        </div>
        return newObj;
    }

    return <ImgRow imgs={obj.imgs} isX={obj.isX} onClick={onClick}/>;

}

function createDesktopGallery(galleryMode, settings){
    if(galleryMode.mode === 'full'){
        return createFullGallery(settings.imgArr, settings.onClick)
    } else {
        const work = mobileCards.filter((card) => galleryMode.work === card.id)[0];
        if(work.orientation === 'x'){
            return <XRowCard imgs={work.imgs} title={work.title} content={work.content} onClick={settings.onClick}/>
        }
        return <YRowCard imgs={work.imgs} title={work.title} content={work.content} onClick={settings.onClick}/>
    }
}

function Gallery() {
    const [isMobile, setMQL] = useState(window.innerWidth < 550 ? true: false);
    const [galleryMode, setGalleryMode] = useState({mode: 'full', work: null});
    const [isVisible, setVisibility] = useState(true);

    window.addEventListener('resize', () => {
        const mql = window.matchMedia('(max-width: 550px)');
        setMQL(mql.matches);
    })

    function handleImgClick(imgName) {
        console.log('click');
        setVisibility(false);
        setTimeout(()=>{
            setGalleryMode({mode: 'focus', work:imgName});
            setVisibility(true);
        }, 1000);
    }

    function handleBackClick() {
        console.log('click');
        setVisibility(false);
        setTimeout(()=>{
            setGalleryMode({mode: 'full', work: null});
            setVisibility(true);
        }, 1000);
    }

    return (
        <section id="gallery" className={isVisible? null : "disappear"}>
            {
                isMobile
                    ?<div>
                        <h2>gallery</h2>
                        {mobileCards.map((card) => {
                            return <ImgCard title={card.title} content={card.content} imgs={card.imgs}/>
                        })}
                    </div>
                    :createDesktopGallery(galleryMode, galleryMode.mode==="full"? {imgArr: desktopImgs, onClick: handleImgClick}: {onClick: handleBackClick})
            }
        </section>
    );
}

export default Gallery;