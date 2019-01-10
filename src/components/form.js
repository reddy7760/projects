import React from 'react'
// import Axios from 'axios';
import axios from 'axios';
class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            department:'',
            priority:'',
            message:''
        }
    }
    inputChange=(event)=>{
        console.log(event)
         this.setState({
             [event.target.name] : event.target.value
         })
    }

    // shivu(event){
    //     console.log(event)
    // }
    submit=(e)=>{
        e.preventDefault()
    //   console.log(e.target.name.value)
      let newObj={
          name:this.state.name,
          department:this.state.department,
          priority:this.state.priority,
          message:this.state.message
      }
      console.log(newObj)
      axios.post('http://dct-api-data.herokuapp.com/tickets/?api_key=9f24edd2c4a7453c',newObj).then(response=>{
          console.log(response.data)
          this.props.newTicket(response.data)
      })
        
     
    }
   
    render(){
        return(
            <form onSubmit={this.submit}><br/>
                <label><br/>
                    Name : 

                          <input type = "text"  name="name"  onChange = {this.inputChange}/>
                </label><br/>
                <label>
                    Department : 
                    
         <select name ="department"onChange={this.inputChange}>
              <option value="">Select</option>
                <option value="Sales">Sales</option>
                <option value ="Technical">Technical</option>
                <option value=" Hr">Hr</option>
         </select><br/>
                </label>
                <label for="priority">
                    Priority : 
                    
                    <input type = "radio"value="High" name="priority"onChange={this.inputChange}/>
                    <label for="High">High</label>
                    
                    <input type = "radio"value="Medium"name="priority"onChange={this.inputChange}/>
                    <label for="medium">Medium</label>
                    
                    <input type = "radio"value="Low"name="priority"onChange={this.inputChange}/>
                    <label for="low">Low</label>
                </label><br/>
                <label>Message : 
                    <textarea  name="message"onChange={this.inputChange}>

                    </textarea><br/>
                    <input type="submit" value="submit"/>
                    <input type="reset" value="Reset"/>
                </label>

            </form>
        )
    }
}
export default Form