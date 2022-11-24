import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Layout from '../containers/Layout'
// import Login from '../containers/Login'
// import RecoveryPassword from '../containers/RecoveryPassword'
// import NotFound from '../pages/NotFound'

import {Home} from "./Components/Home/Home";
import {SignIn} from "./Components/SignIn/SignIn";
import {SignUp} from "./Components/SignUP/SignUp";


const App = () => {
    return (
        <Router>

                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/login" element={<SignIn/>}/>
                    <Route exact path="/signup" element={<SignUp/>}/>
                    {/*<Route path="*" element={<NotFound/>}/>*/}
                </Routes>
        </Router>
    );
}

export default App;
