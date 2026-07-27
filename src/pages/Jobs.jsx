import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./jobs.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import LatestJobs from "../components/LatestJobs";
import Footer from "../components/Footer";

function Jobs() {

    const [jobs, setJobs] = useState([]);
    const navigate=useNavigate();
    console.log(

localStorage.getItem("token")

);
async function DeleteJob(id) {
    try {
        await axios.delete(`https://job-portal-backend-2q57.onrender.com/jobs/${id}`,
        
        {
             headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
        );
        alert("Job deleted successfully");
        fetchJobs(); 
    } catch (err) {
        console.log(err);
    }
}

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
const role = localStorage.getItem("role");

   return (

    <>
 <Navbar/>
            <Hero/>
            <Stats/>
            <LatestJobs/>


<div className="job-container">
    {jobs.map((job) => (
        <div className="job-card" key={job.id}>

            <h2>{job.title}</h2>
            <p>{job.company}</p>

            {role === "ADMIN" && (
                <div className="btn-group">
                    <button
                        className="update-btn"
                        onClick={() => navigate(`/update/${job.id}`)}
                    >
                        ✏️ Update
                    </button>

                    <button
                        className="delete-btn"
                        onClick={() => DeleteJob(job.id)}
                    >
                        🗑 Delete
                    </button>
                </div>
            )}

        </div>
    ))}
</div>

{role === "ADMIN" && (
    <button
        className="add-btn"
        onClick={() => navigate("/AddJob")}
    >
        + Add New Job
    </button>
)}
<Footer/>

    </>

);

}

export default Jobs;
