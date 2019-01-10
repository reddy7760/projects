import React from 'react'
import axios from 'axios'
class TicketTableRow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            users:[],
            checkedRow:new Map()
            
        }
    }
  
    statusUpdate=(event)=> {
        console.log(event.target.name);
        console.log(this.props.data.status)
    let name = event.target.name
    let isChecked = event.target.checked
    this.setState(prevState => ({ checkedRow: prevState.checkedRow.set(name, isChecked) }))
          
        if(event.target.checked){
            this.props.data.status = "completed"
        }
          else{
            this.props.data.status = "open"
        }
        axios.put(`http://dct-api-data.herokuapp.com/tickets/${this.props.data.ticket_code}?api_key=9f24edd2c4a7453c`,this.props.data).then( (response)=>{
            console.log(response.data);
            // console.log(this.state.users)   
            this.props.statusUpdate(response.data)
        })
        }
        status=(user)=>{
            if(user.status=='open'){
                return false
            }
            else{
                return true
            }
        }

    render(){
        let user = this.props.data
            return(
                <tr key={ this.props.data.id } >
                    <td>{ this.props.data.ticket_code }</td>
                    <td>{ this.props.data.name }</td>
                    <td>{ this.props.data.department }</td>
                    <td>{ this.props.data.priority }</td>
                    <td>{ this.props.data.message }</td>
                    <td><input type="checkbox"   checked={ this.status(user) || this.state.checkedRow.get(user.id) } name={ this.props.data.id } onChange={ this.statusUpdate }/></td>
                </tr>
            )
}
}      
export default TicketTableRow
