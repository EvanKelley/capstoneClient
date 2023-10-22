import React, { useEffect, useState } from "react"
import axios from "axios"

const Home = () => {
    const [userCharacters, setUserCharacters] = useState(null)
    const cookieValue = document.cookie.split("; ").find((row)=>row.startsWith("id="))?.split("=")[1];
    console.log(cookieValue)
    const getUserCharacters = () => {
        axios.get("http://localhost:3000/characters", {
            userId: cookieValue
        })
        .then(function (response) {
            console.log(response)    
            // window.location.replace("/home")  
        })
        .catch(function (error) {
            console.log(error)
        })

        // setUserInfo({
        //     email: "",
        //     password: ""
        // })
    }
    useEffect(()=>{
        getUserCharacters()
    })
    return (
        <div> Home Component</div>
    )
}

export default Home