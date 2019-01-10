import React from 'react'
class Search extends React.Component{
    constructor(){
        super()
        this.state={
            code:''
        }
    }
    searchCode=(e)=>{
        this.setState({
            code:e.target.value
        })
        this.props.search(e.target.value)
        console.log(this.state.code)
    }
    render(){
        return(
            <form ><br/>
                <input type="text"  placeholder="search by code" value = {this.state.code} onChange={this.searchCode}/>
            </form>
        )      
}
}
export default Search