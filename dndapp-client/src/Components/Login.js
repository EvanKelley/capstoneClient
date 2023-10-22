import React, { useState } from "react"
import axios from "axios"
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        // event.preventDefault()
        const currentUser = { ...userInfo }
        currentUser[event.target.name] = event.target.value
        setUserInfo(currentUser)
        
    }
    console.log(userInfo)

    const loginUser = (event) => {
        event.preventDefault()
        console.log("Log In Function")
        axios.post("http://localhost:3000/auth/login", {
            email: userInfo.email,
            password: userInfo.password
        })
        .then(function (response) {
            console.log(response)
            document.cookie="loggedIn=true"
            document.cookie=`id=${response.data.id}`     
            // window.location.replace("/home")  
        })
        .catch(function (error) {
            console.log(error)
        })

        setUserInfo({
            email: "",
            password: ""
        })
    }
   
    return (
        <Container maxWidth="sm">
        <div>Login Component</div>
            <form onSubmit={loginUser}>
                <TextField label="email" name="email" value={userInfo.email} onChange={(event)=>{handleChange(event)}} variant="outlined" />
                <TextField label="password" name="password" value={userInfo.password} type="password" onChange={(event)=>{handleChange(event)}} variant="outlined" />
                <Button variant="outlined" type="submit">Log In</Button>
                <Button variant="outlined" type="submit">Sign Up</Button>
            </form>
        </Container>
    )
}

export default Login