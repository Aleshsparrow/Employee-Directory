import React from 'react';

function Cards(props) {
    
    return( <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img style={{height:150}} src={props.image} className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.lastName}, {props.firstName}</h5>
<p className="card-text">email: {props.email}</p>
<p className="card-text"><small class="text-muted">Phone: {props.phone}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
        
}

export default Cards;