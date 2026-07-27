import { Routes, Route } from "react-router-dom";
import AddJob from "../pages/AddJob";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import UpdateJob from "../pages/UpdateJob";
import Jobs from "../pages/jobs";
import About from "../pages/About";
import Contact from "../pages/Contact";


function AppRoutes() {

    return (

        <Routes>

            <Route

                path="/register"

                element={<Register />}

            />

            <Route

                path="/"

                element={<Login />}

            />
            
            <Route

                path="/Login"

                element={<Login />}

            />
            <Route path="/home" element={<Home/>}/>
            <Route path="/update/:id" element={<UpdateJob/>}/>
             <Route path="/about" element={<About/>}/>
             <Route path="/contact" element={<Contact/>}/>
            <Route

    path="/AddJob"

    element={<AddJob />}

/>
<Route path="/jobs" element={<Jobs />} />

        </Routes>

    );

}

export default AppRoutes;