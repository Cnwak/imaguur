import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Search from './SearchBar'
import Found from './Found'
import Images from './ImageList'

class App extends React.Component{
 
 
 state = {image: [],
found : '',
classcolor:'white'}
 
  onFormSubmit =async (text)=>{

const response = await axios.get( 'https://api.unsplash.com/search/photos' , {
  params: {query: text,
  page: 2,
per_page: 20},

  headers: {
    
    Authorization: 'Client-ID 0y6KzMkvd0boAfn4xU2CJkXHd73amDURPySyZapsrl8',

  }
})

this.setState({classcolor: 'indigo lighten-4'})

this.setState({image:response.data.results});

const data = response.data

this.setState({found: `WE FOUND ${data.total} IMAGES BUT WILL DISPLAY THE TOP ${data.results.length} `})

if(data.total === 0){
  this.setState({found: 'Omo,abeg check your search term wella. E no dei records'})

  this.setState({classcolor:'white'})
}

 }

 dataset=()=>{
   return(
<div >
      
      <div className= 'container'>
        <div className='row'>
          <div className= 'col s12'>
               <Search onFormSend = {this.onFormSubmit}/>
      
               <h3> <Found popup = {this.state.found}/></h3>
      
                
          </div>
        </div>
      </div>
      
                <Images images = {this.state.image}/> 
          
          <br/>
          <br/>
          <br/>
          <footer  className="page-footer grey darken-2">
  <div className="footer-copyright grey darken-2">
    <div className="container">Copyright &copy; 2020 Chijindu Nwakama</div>
  </div>
</footer>

            </div>

            
   )

 }

 
  render(){
        
    return(<div className={this.state.classcolor}>
      {this.dataset()}
      </div>
    )
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);