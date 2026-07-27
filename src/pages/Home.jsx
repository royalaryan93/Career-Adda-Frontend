import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

import "./Home.css";

function Home() {

    const [jobs, setJobs] = useState([]);

    const navigate = useNavigate();

    async function fetchJobs() {

        try {

            const response = await axios.get(
                "https://job-portal-backend-2q57.onrender.com/jobs",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            );

            setJobs(response.data);

        }

        catch (error) {

            alert("Something went wrong.");

        }

    }

    useEffect(() => {

        fetchJobs();

    }, []);

    return (

        <>

            <Navbar />

            <Hero />

            <Stats />
            

            <h2 className="jobs-heading">

                Featured Jobs

            </h2>
            <p className="jobs-subheading">
    Discover the latest opportunities from top companies.
</p>

            <div className="job-container">

                {jobs.slice(0, 2).map((job) => (

                    <div className="job-card" key={job.id}>

                        <h2>{job.title}</h2>

                        <p>{job.company}</p>

                    </div>

                ))}

            </div>

            <button
                className="view-btn"
                onClick={() => navigate("/jobs")}
            >
                View All Jobs
            </button>
            <Footer/>

        </>

    );

}

export default Home;
