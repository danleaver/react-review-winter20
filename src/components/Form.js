import React from 'react';
import GetAgeFromAPI from './GetAgeFromAPI';

class Form extends React.Component {
  state = {
    name: "",
    open: false,
    finalName: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({finalName: this.state.name})
    this.setState({open: true})
  }

  toggleForm = () => {
    this.setState({open: false})
  }

  render = () => {

    return(
      <>
        <div>HELLO</div>
        <div>
            <form onSubmit={this.handleSubmit}>
              <input
                placeholder="Enter Name"
                onChange={(e)=> {
                  this.setState({name: e.target.value}) 
                }}
              >
              </input>
            </form>
          <GetAgeFromAPI toggleForm={this.toggleForm} finalName={this.state.finalName}/>
        </div>
      </>
    )
  }
}

export default Form