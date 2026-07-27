import { useState } from "react";
import axios from "axios";

function AddJob() {

    const [job, setJob] = useState({

        title: "",
        company: ""

    });


   async function handleSubmit() {

    try {

        await axios.post(

            "http://localhost:8081/jobs",

            job,

            {
                headers: {

                    Authorization:
                    `Bearer ${localStorage.getItem("token")}`

                }
            }

        );

        alert("Job Added Successfully.");

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

        <>

            <h1>ADD JOB</h1>


            <input

                type="text"

                placeholder="Enter Job Title"

                onChange={(e) =>

                    setJob({

                        ...job,

                        title: e.target.value

                    })

                }

            />

            <br /><br />


            <input

                type="text"

                placeholder="Enter Company Name"

                onChange={(e) =>

                    setJob({

                        ...job,

                        company: e.target.value

                    })

                }

            />

            <br /><br />


            <button

                onClick={handleSubmit}

            >

                Add Job

            </button>

        </>

    );

}

export default AddJob;