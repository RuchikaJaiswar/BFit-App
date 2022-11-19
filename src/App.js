import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";


import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExerciseList from './components/ExerciseList';
import EditUser from './components/EditUser';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';

const App = () => {
  return (
    <Box width="400px" sx={{ width: {xl: '1488px'} }}>
       < Navbar />
        <Routes>
            <Route path= "/" element ={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
            <Route path="/list" element = {<ExerciseList />} />
            <Route path="/edit/:id" element = {<EditUser />} />
            <Route path="/create" element = {<CreateExercise />} />
            <Route path="/user" element = {<CreateUser />} />
        </Routes>
        <Footer />
    </Box>
  )
}

export default App