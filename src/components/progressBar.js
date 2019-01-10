import React from 'react'
import {Progress} from 'reactstrap'
import Filler from './filler'
class ProgressBar extends React.Component{
  constructor(props){
    super(props)
    this.state={
      percent:''
    }
  }
    data(){
        let tickets = this.props.status()
        console.log(tickets)
    
        let result = tickets.filter(ticket =>{
            return ticket.status == 'completed'
        })
        let percent = Math.floor((result.length / tickets.length)*100);
        console.log(percent)
        return percent;

    }
  render(){
    let percent = this.data()
    return(
      <div>
      <div className="progress-bar">
      <Filler value = {percent}/>
      </div>
      
      {/* <Progress value = {percent}/> */}
      {/* <Filler value = {percent}/> */}
      </div>
    )
  }
}
export default ProgressBar