import React from 'react'
import './ImageList.css'

class ImageList extends React.Component{
  constructor(props){
    super(props)

    this.imageRef = React.createRef()
  }
  

  componentDidUpdate(){
    console.log(this.imageRef);
  }
  
  
  render(){
    
    const images= this.props.images.map((image)=>{
      return( 
          <img ref={this.imageRef} key={image.id} src={image.urls.regular} alt={image.description} />
      )})
      return(
    
        <div  className="image-list" >
          {images}
        </div>
      
    )
  }
  
  
}

export default ImageList