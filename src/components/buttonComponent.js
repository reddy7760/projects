import React from 'react'
class Button extends React.Component{
  buttonHandle=(e)=>{
      this.props.priority(e.target.value)
  }
    render(){
        return(
            <div className="btn-group mr-2" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary " value="All"  onClick={this.buttonHandle}>All</button>
            <button type="button" className="btn btn-secondary" value="High" onClick={this.buttonHandle} >High</button>
            <button type="button" className="btn btn-secondary" value="Medium"  onClick={this.buttonHandle}>Medium</button>
            <button type="button" className="btn btn-secondary" value="Low"  onClick={this.buttonHandle}>Low</button>
          </div>
        )
    }
}
export default  Button