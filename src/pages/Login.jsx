import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    const navigate=useNavigate();

    const [loginData, setLoginData] = useState({

        email: "",
        password: ""

    });


    async function handleLogin() {

    try {

        const response = await axios.post(

            "https://job-portal-backend-2q57.onrender.com/auth/login",

            loginData

        );


        localStorage.setItem(

                "token",

                response.data.token

        );
        localStorage.setItem(
    "role",
    response.data.role
);


        alert("Login Successful.");
navigate("/Home");
    }

    catch (error) {

        alert("Login Failed.");

    }

}

 return (

        <div className="auth-page">

            <div className="auth-card">

                <h1>Welcome Back 👋</h1>

                <p>Login to Career Adda</p>

                <input

                    type="email"

                    placeholder="Enter Email"

                    onChange={(e) =>

                        setLoginData({

                            ...loginData,

                            email: e.target.value

                        })

                    }

                />

                <input

                    type="password"

                    placeholder="Enter Password"

                    onChange={(e) =>

                        setLoginData({

                            ...loginData,

                            password: e.target.value

                        })

                    }

                />

                <button

                    className="auth-btn"

                    onClick={handleLogin}

                >

                    Login

                </button>

                <div className="auth-footer">

                    New User?

                    <span

                        onClick={() => navigate("/register")}

                    >

                        Register Here

                    </span>

                </div>

            </div>

        </div>

    );


}

export default Login;
