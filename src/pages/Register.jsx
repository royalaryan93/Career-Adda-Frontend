import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./Login.css";   // Same CSS

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({

        username: "",
        email: "",
        password: ""

    });

    async function handleRegister() {

        try {

            await axios.post(

                "http://localhost:8081/auth/register",

                user

            );

            alert("Registration Successful.");

            navigate("/login");

        }

        catch (error) {

            alert("Registration Failed.");

        }

    }

    return (

        <div className="auth-page">

            <div className="auth-card">

                <h1>Create Account 🚀</h1>

                <p>Join Career Adda and start your journey.</p>

                <input

                    type="text"

                    placeholder="Enter Username"

                    onChange={(e) =>

                        setUser({

                            ...user,

                            username: e.target.value

                        })

                    }

                />

                <input

                    type="email"

                    placeholder="Enter Email"

                    onChange={(e) =>

                        setUser({

                            ...user,

                            email: e.target.value

                        })

                    }

                />

                <input

                    type="password"

                    placeholder="Enter Password"

                    onChange={(e) =>

                        setUser({

                            ...user,

                            password: e.target.value

                        })

                    }

                />

                <button

                    className="auth-btn"

                    onClick={handleRegister}

                >

                    Register

                </button>

                <div className="auth-footer">

                    Already have an account?

                    <span

                        onClick={() => navigate("/login")}

                    >

                        Login

                    </span>

                </div>

            </div>

        </div>

    );

}

export default Register;