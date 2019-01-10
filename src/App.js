import React, { Component } from 'react';
// import logo from './logo.svg';
import axios from 'axios'
import './App.css';
// import { Progress } from 'react-sweet-progress';
import ChartPage from './components/pie'
// import './ProgressBar.css';
import TicketTable from './components/ticketsTable'
import Form from './components/form'
import Search from './components/search'
import Button from './components/buttonComponent'
import ProgressBar from './components/progressBar'
import BarChart from './components/barChart'
class App extends Component {
  constructor(){
    super()
    this.state={
      tickets:[],
      filteredTicket:[]
      // percentage:''
    }
  }

ticketsData=()=>{
  return this.state.tickets
}
// ticketsData()



// progressFilter=()=>{
//   let data = this.state.tickets
//   console.log(data)
//   let output = data.filter( ticket=>{
//     return ticket.status =='completed'
//   })
//   console.log(output)
//   let percentage =  Math.floor((output.length/data.length)*100);
//   // return percentage
//   console.log(percentage)
// }

filterSearch=(ele)=>{
     this.setState((prevState)=>{
     return { 
       filteredTicket: prevState.tickets.filter((ticket)=>
          ticket.ticket_code.indexOf(ele)!==-1)
      }
     })
}

filterPriority=(priority)=>{
  if(priority =='All'){
    this.setState({
      filteredTicket:this.state.tickets
     
    })
   
  }
  else{
  this.setState((prevState)=>{
    return{
      filteredTicket:prevState.tickets.filter((ticket)=>
        ticket.priority==priority)
    }
         
  })
}
}
handleNewTicket=(data)=>{
    this.setState((prevState)=>{
      return {
        tickets:prevState.tickets.concat(data),
        filteredTicket:prevState.tickets.concat(data)
      }
    })
    
  }

  updateStatus=(data)=>{
    let arr = (this.state.tickets.map(ticket=>{
      return ticket.id
    }))
console.log(arr)

    let index = arr.indexOf(data.id)
    console.log(index)

    let arrayUpdate = this.state.tickets;
    console.log(arrayUpdate)
    arrayUpdate.splice(index,1,data)
    console.log(arrayUpdate)

      this.setState({
        tickets: arrayUpdate,
        filteredTicket:arrayUpdate
      
    })
  }
  
  
  
  responseData=()=>{
    return this.state.filteredTicket;
  }



componentDidMount(){
  axios.get('http://dct-api-data.herokuapp.com/tickets/?api_key=9f24edd2c4a7453c').then(response=>{
      // console.log(response.data)
      // this.props.len(response.data)
      this.setState({
          tickets:response.data,
          filteredTicket:response.data
      })
     console.log(this.state.tickets)
  })
}


  render() {
    return (
   
    <div>
      <h2>Ticket Master</h2>
      <Search  search={this.filterSearch}/> <br/>
      <Button  priority={this.filterPriority}/>
      <TicketTable  data={this.state.filteredTicket}  updateStatus={this.updateStatus} /><br/>
     <ProgressBar   status={this.ticketsData}/>
      <Form newTicket={this.handleNewTicket}/>
     <ChartPage dataPie = {this.responseData}/>
     <BarChart data = {this.responseData}/>
      </div>
    )
  }
}
export default App;
