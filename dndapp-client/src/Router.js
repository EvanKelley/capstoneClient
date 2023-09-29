import React from "react"
import{ Route, Routes, Navigate } from "react-router"

import Signup from "./Components/Signup"
import Login from "./Components/Login"

const Router = () => {
    return (
        <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    ) 
}

export default Router