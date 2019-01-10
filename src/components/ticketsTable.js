import React from 'react'
import TicketTableRow from './ticketTableRow'
// import {Table} from 'reactstrap'
class TicketTable extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tickets:[]
        }
    }
    statusUpdate=(data)=>{
       
        this.props.updateStatus(data)
    
      }
    
  
    render(){
        return(
            <div>
                <h1>Listing Tickets - {this.props.data.length}</h1>
                
                <table border="1">
                    <thead>
                           <tr >
                               <th> Code </th>
                               <th> Name </th>
                               <th> Department </th>
                               <th> Priority </th>
                               <th> Message </th>
                               <th> Status </th>
                           </tr>
                    </thead>
                    <tbody>
                        
                     
                        { this.props.data.map((ticket)=>{
                            return (
                            <TicketTableRow key= {ticket.ticket_code} data = { ticket } statusUpdate={this.statusUpdate}  />
                            )
                        })}
                       
                    </tbody>
                </table>
            </div>
        )
    }
}
export default TicketTable