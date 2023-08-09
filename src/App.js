import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import ExceriseDetails from './Pages/ExceriseDetails';

import './App.css';

const App = () => {
    return (
        <Box width="400px" sx={{ width: { x1: '148px' } }} m="auto">
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/exercise/:id' element={<ExceriseDetails />} />
            </Routes>
            <Footer />
        </Box>
    )
}
export default App;