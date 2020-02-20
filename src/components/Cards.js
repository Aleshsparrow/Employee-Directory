import React from 'react';
import API from "../utils/API";


function Cards() {
    let table = []
    let result = []
    API.getAllEmployee().then(res =>{
        const data = res.data.results;
        for (let i = 0; i < data.length; i++) {
            // console.log(data[i])
            result.push(data[i])
        }
        console.log(result)
        })
        for (let index = 0; index < 20; index++) {        
            table.push(<div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src="..." className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>)
        }

            return(
                table
            )
}

export default Cards;