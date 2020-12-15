import React from 'react'

const ImageList = (props) =>{
  
  // console.log(props.images[0].link);
  const images= props.images.map((image)=>{
    return <img src={image.link} alt= ''/>
  })
  return(
    <div>
{images}
    </div>
  )
}

export default ImageList