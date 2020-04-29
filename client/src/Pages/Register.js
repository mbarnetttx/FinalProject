import react from 'react'

function register() {
    return (
        <form action="/register" method="POST">
         <h1>Register</h1>   
                <label for="name">Name</label>
                <input type="text" id="name" name="name"
                    required/>


                
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email"
                        required/>

                        <label for="password">Password</label>
                        <input type="password" id="password" name="password"
                            required/>


                        <button type="submit">Register</button>
                        <a href="/login">Login</a>
        </form>

                    

    )
}

export default register