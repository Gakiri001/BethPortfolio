import React from 'react'
import "./Gallery.css"
import { CiFaceSmile } from "react-icons/ci";
import gallery from '../../data/gallery';

const Gallerycard = ({image }) => {
  return(
    <div className='Gallerycard'>
      <div className='Gallerycardimage'>
        <img src={image} alt="" />
      </div>
      <div className='Gallerycardinfo'>
        <div><CiFaceSmile/></div>
        {/* <h2>{qoute}</h2>
        <p>{sub}</p> */}
      </div>
    </div>
  )
}

function Gallery() {
  return (
    <div className='Gallery'>
      <div className='GalleryHeader'>
        <h1>Gallery</h1>
      </div>
      <div className='GalleryWrapper'>
        {gallery.map((current,i) => (
          <Gallerycard
          key={i}
          image={current.image}
          // qoute={current.qoute}
          // sub={current.sub}
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery
