import React from 'react'
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
    

data(){
    console.log(this.props.dataPie())
    let tickets = this.props.dataPie();
    let low = 0, medium = 0, high = 0;
    tickets.forEach(ticket=>{
        if(ticket.priority == 'High'|| ticket.priority=='high'){
            high++;
        } else if(ticket.priority == 'medium'|| ticket.priority=='Medium'){
            medium++;
        } else {
            low++;
        }
    })
    let array = [high,medium,low]
    return array
}


render() {
    let array = this.data()
    console.log(array)
   let  dataPie =  {
        labels: ['high','medium','low'],
        datasets: [
          {
            data: array,
            backgroundColor: [
              "#F7464A",
              "#46BFBD",
              "#FDB45C"            
            ],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#5AD3D1",
              "#FFC870"
            ]
          }
        ]
      }
    
    
    return (
      <MDBContainer>
        <h3 className="mt-5">Ticket Priority: </h3>
        <Pie data={dataPie} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default ChartsPage;