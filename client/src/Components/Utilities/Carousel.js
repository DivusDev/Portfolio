
import React from "react";


import ImageGallery from 'react-image-gallery';

import '../../scss/carousel.scss'

// import me from '../../../public/photos/Kuliouou1.jpg'

const makeImageLinks = (imageName) => {
  return ({
    original: `${process.env.PUBLIC_URL}/photography/${imageName}`,
    thumbnail: `${process.env.PUBLIC_URL}/photography/${imageName}`,
  })
}

const imageNames = [
  'solo_car.jpg',
  'bay_sunset.jpg',
  'dark_tree_abstract_insta.jpg',
  'drift_wood.jpg',
  'Kappa_quarry_pano_insta.jpg',
  'manana_birds.jpg',
  'sunstar_palm_hdr_warm.jpg',
  'two_trees_touching.jpg',
]

const Carousel = () => {
 
  const images = imageNames.map( n => makeImageLinks(n))


  return <ImageGallery items={images} />;
}

export default Carousel;