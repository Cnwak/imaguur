import React from 'react'





class Search extends React.Component{
  
  state = {text: ''}

formSubmit=(e)=>{

this.props.onFormSend(this.state.text)
e.preventDefault()
}

    
  
  render(){


    return(<div >
      
            <form onSubmit={this.formSubmit} style={{border: '2px solid black',marginTop:'15px'}}>
               Enter Search:
                <div style={{width: '80%'}} className="input-field inline">
                  <label htmlFor="search"></label>
                  <input id="search" 
                   type="text"
                   value={this.state.text}
                    onChange={e => {this.setState({text: e.target.value })
                    }}/>
                    
                 </div>
            </form>

      
    </div>

    )
  }
}

export default Search
