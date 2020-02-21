import React, { Component } from "react";
import API from "../utils/API";
// import Cards from "../components/Cards"

class Employees extends Component{
    state = {
        employees : []
    };

    componentDidMount(){
        this.loadAll()
    }

    handleFirstNameSort = () =>{
        console.log("click")
        console.log(this.state.employees)
        var firstName = this.state.employees
        firstName.sort((a, b)=>{
            if(a.name.first<b.name.first){return -1}
            if(a.name.first>b.name.first){return 1}
            return 0;
        })
        console.log(firstName);
        this.setState({
            employees: firstName
            
        })
        console.log(this.state.employees)
    }

    handleLastNameSort = ()=>{
        console.log("clicking")
        var lastName = this.state.employees
        lastName.sort((a, b)=>{
            if(a.name.last < b.name.last){return - 1}
            if(a.name.last > b.name.last){return 1}
            return 0
        })
        this.setState({
            employees: lastName
        })
    }

    loadAll = () => {
        API.getAllEmployee().then((res) =>{
            const data = res.data.results;
            console.log(data);
            this.setState({
                employees: data
            }) 
        })
    }


    render(){
      
    return(
        <div className="container">
               <table>
                   <tr>
                       
                   <th>Image</th>
                    <th onClick={this.handleFirstNameSort}>First Name</th>
                   <th onClick={this.handleLastNameSort}>Last Name</th> 
                   <th>Email</th>
                   <th>Phone Number</th>
                   </tr>
           {this.state.employees.map(item => (
               <tr>
                   <td>
                       <img src={item.picture.thumbnail}></img>
                   </td>
                   <td>
                       {item.name.first}
                   </td>
                   <td>
                       {item.name.last}
                   </td>
                   <td>
                       {item.email}
                   </td>
                   <td>
                       {item.cell}
                   </td>
               </tr>
               
               ))} 
               </table>
        </div>
        
    )
    }
}


export default Employees