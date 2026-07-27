import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./UpdateJob.css";
import { useNavigate } from "react-router-dom";

function UpdateJob() {

    const [jobs, setJobs] = useState({

        title: "",
        company: ""

    });

    const { id } = useParams();
    const navigate=useNavigate();

    // Fetch existing job details
    async function getJobById() {

        try {

            const response = await axios.get(

                `http://localhost:8081/jobs/${id}`,

                {

                    headers: {

                        Authorization:
                            `Bearer ${localStorage.getItem("token")}`

                    }

                }

            );

            setJobs(response.data);

        }

        catch (error) {

            alert("Unable to load job details.");

        }

    }

    useEffect(() => {

        getJobById();

    }, [id]);

    // Update Job
    async function postupdatedjob() {

        try {

            await axios.put(

                `http://localhost:8081/jobs/${id}`,

                jobs,

                {

                    headers: {

                        Authorization:
                            `Bearer ${localStorage.getItem("token")}`

                    }

                }

            );

            alert("Job Updated Successfully.");
            navigate("/jobs");

        }

        catch (error) {

            if (error.response) {

                alert(error.response.data);

            }

            else {

                alert("Something went wrong.");

            }

        }

    }

    return (

        <div className="update-container">

            <h2>Update Job</h2>

            <input
                type="text"
                placeholder="Enter updated title"
                value={jobs.title}
                onChange={(e) =>
                    setJobs({

                        ...jobs,

                        title: e.target.value

                    })
                }
            />

            <input
                type="text"
                placeholder="Enter updated company"
                value={jobs.company}
                onChange={(e) =>
                    setJobs({

                        ...jobs,

                        company: e.target.value

                    })
                }
            />

            <button
                type="button"
                className="update-btn"
                onClick={postupdatedjob}
            >
                Update Job
            </button>

        </div>

    );

}

export default UpdateJob;