import React, { Component } from "react";
import API from "../utils/API";

class Employees extends Component{
    state = {
        image: "",
        name: "",
        email: "",
        phone: ""
    };

    componentDidMount(){
        this.loadAll
    }
}

export default Employees