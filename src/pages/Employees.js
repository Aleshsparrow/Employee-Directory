import React, { Component } from "react";
import API from "../utils/API";
import Cards from "../components/Cards"

class Employees extends Component{
    state = {
        employees : []
    };

    componentDidMount(){
        this.loadAll()
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
        <div>
           {this.state.employees.map(item => (
               <Cards
                image={item.picture.medium}
                 firstName={item.name.first}
                 lastName={item.name.last}
                 email={item.email}
                 phone={item.cell}
               />

           ))} 
        </div>
        
    )
    }
}


export default Employees