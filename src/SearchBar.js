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
               
               <div style={{display:'flex',flexWrap:'nowrap',alignItems:'center',gap: '15px'}}>
                <div style={{width: '80%'}} className="input-field inline">
                  <label htmlFor="search"></label>
                  <input 
                  className="black-text"
                  id="search" 
                  placeholder="Search Image..."
                  type="text"
                   value={this.state.text}
                    onChange={e => {this.setState({text: e.target.value })
                    }}/>
                    
                 </div>

                 <div>
                 <button className="btn grey darken-2 waves-effect waves-light" type="submit" name="action">
                  <i className="material-icons">search</i>
                  </button>
                </div>

                </div>

            </form>

      
    </div>

    )
  }
}

export default Search
