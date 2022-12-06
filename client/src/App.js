import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Home} from "./Components/Home/Home";
import {SignIn} from "./Components/SignIn/SignIn";
import {SignUp} from "./Components/SignUP/SignUp";
import {Error} from "./Components/404/Error"

const App = () => {
    return (
        <Router>

                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/login" element={<SignIn/>}/>
                    <Route exact path="/signup" element={<SignUp/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
        </Router>
    );
}

export default App;
