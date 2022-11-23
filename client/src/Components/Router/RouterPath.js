import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {SignUp} from "../SignUP/SignUp";
import {SignIn} from "../SignIn/SignIn";

export default function RouterPath() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUp />}>
                    <Route index element={<SignUp />} />
                    <Route path="blogs" element={<SignUp />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
