import React from "react"
import{ Route, Routes, Navigate } from "react-router"

import Signup from "./Components/Signup"
import Login from "./Components/Login"
import Home from "./Components/Home"

const Router = () => {
    return (
        <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    ) 
}

export default Router