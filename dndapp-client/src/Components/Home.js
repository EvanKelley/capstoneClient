import React, { useEffect, useState } from "react"
import axios from "axios"
import cookie from "cookie"
import "../App.css"

const Home = () => {
    const [userCharacters, setUserCharacters] = useState([])
    const cookieValue = document.cookie.split("; ").find((row)=>row.startsWith("id="))?.split("=")[1];
    console.log(cookieValue, "current state", userCharacters)
    const getUserCharacters = () => {
        axios.get("http://localhost:3000/characters",{
            headers:{
                authorization:`Bearer ${cookie.parse(document.cookie).token}`
            }
        } 
        
        
    )
        .then(function (response) {
            // console.log("hello")
            setUserCharacters(response.data)   
            // console.log("new state", userCharacters) 
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
    },[])
    return (
        <div className="Home">
            {userCharacters.map((character)=>(
                <div key={character.character_id} className="characterSheet">
                    <h3>{character.name}</h3>
                    <p>Heritage: {character.race}</p>
                    <p>Class: {character.class}</p>
                    <p>Level: {character.level}</p>
                    <p>XP: {character.experience_points}</p>
                    <p>HP: {character.hit_points}</p>
                    <p>AC: {character.armor_class}</p>
                    <p>Alignment: {character.alignment}</p>
                    <p>Background: {character.background}</p>
                    <p>STR: {character.strength}</p>
                    <p>DEX: {character.dexterity}</p>
                    <p>CON: {character.constitution}</p>
                    <p>INT: {character.intelligence}</p>
                    <p>WIS: {character.wisdom}</p>
                    <p>CHA: {character.charisma}</p>     
                </div>
            ))}
        </div>
    )
}

export default Home