import React, { Component } from "react";
import API from "../utils/API";
import Cards from "../components/Cards"

class Employees extends Component{
    state = {
        image: "",
        name: "",
        email: "",
        phone: ""
    };

    componentDidMount(){
        this.loadAll()
    }

    loadAll = () => {
        API.getAllEmployee().then(res =>{
            const data = res.data.results;
            for (let i = 0; i < data.length; i++) {
                // console.log(data[i])
            }
                    
        })
    }

    render(){
        // let table = []
        // for (let i = 0; i < 8; i++) {
            // table.push(<Cards/>)
        // }
                return(
                    <Cards/>
                )
    }
}

export default Employees