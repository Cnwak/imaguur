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

const response = await axios.get( 'https://api.unsplash.com/search/photos' , {
  params: {query: text,
  page: 2,
per_page: 20},

  headers: {
    
    Authorization: 'Client-ID 0y6KzMkvd0boAfn4xU2CJkXHd73amDURPySyZapsrl8',

  }
})

this.setState({image:response.data.results});

const data = response.data

this.setState({found: `WE FOUND ${data.total} IMAGES BUT WILL DISPLAY THE TOP ${data.results.length} `})

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

          
    </div>
  </div>
</div>

          <Images images = {this.state.image}/> 
    
      </div>

    )
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);