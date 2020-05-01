import React from 'react';

function index(props) {
    return (
        <form action="/logout?_method=DELETE" method="POST">        
            <h1>Hi {props.name} </h1>
                <button type="submit">Log Out</button>
        </form>
    )
}

export default index;
