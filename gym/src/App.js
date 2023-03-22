import React from "react";
import './App.css'
import { Route, Routes } from "react-router-dom";
import {Box} from "@mui/material"
import Home from "./pages/Home.js";
import ExerciseDetail from "./pages/Exercise.js";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
const App = () =>{
    return(
        <Box width="400px" sx={{width:{ xl:'1488px' }}} m="auto">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/exercise/:id" element={<ExerciseDetail/>}></Route>
            </Routes>
            <Footer/>
        </Box>
    )
} 
export default App