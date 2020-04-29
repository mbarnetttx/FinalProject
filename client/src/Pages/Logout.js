import react from 'react'


function index(props) { // Props is optional
    return (
        <h1>Hi {props.name} </h1> // This line is optional

            <form action="/logout?_method=DELETE" method="POST">

                <button type="submit">Log Out</button>
    
            </form>

    )
}

export default index
