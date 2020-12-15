import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Search from './SearchBar'
import Found from './Found'
import Images from './ImageList'

class App extends React.Component{
 
 
 state = {image: [],
found : ''}
 
  onFormSubmit =async (text)=>{

const response = await axios.get( 'https://api.imgur.com/3/gallery/search' , {
  params: {q_exactly: text,},
  withCredentials: false,
  headers: {
    
    Authorization: 'Client-ID 0862bba7eadcd3f',

  }
})

this.setState({image:response.data.data});

this.setState({found: `WE FOUND ${this.state.image.length} IMAGES`})

// console.log(text.length)

 }
//  hiiifff
 
  render(){

    return(<div>
      
<div className= 'container'>
  <div className='row'>
    <div className= 'col s12'>
         <Search onFormSend = {this.onFormSubmit}/>

          <Found popup = {this.state.found}/>

          <Images images = {this.state.image}/>
    </div>
  </div>
</div>

      
    
      </div>

    )
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);