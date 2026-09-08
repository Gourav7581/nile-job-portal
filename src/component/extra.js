import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import applylogo from '../image/applylogo.jpg';

const ApplyNow = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const jobTitle = queryParams.get("jobtitle");

    const [jobDetails, setJobDetails] = useState(null);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        resume: null,
    });

    // Fetch Job Details from API
    useEffect(() => {
        if (jobTitle) {
            axios.get(`https://hotelopsmasterapi.azurewebsites.net/API/NileCareersAPI/OpenPositionDetails?JobTitle=${jobTitle}`)
                .then(response => setJobDetails(response.data))
                .catch(error => console.error("Error fetching job details:", error));
        }
    }, [jobTitle]);

    // Handle Form Inputs
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: files ? files[0] : value
        }));
    };

    // Handle Form Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataObj = new FormData();
        formDataObj.append("firstName", formData.firstName);
        formDataObj.append("lastName", formData.lastName);
        formDataObj.append("phone", formData.phone);
        formDataObj.append("email", formData.email);
        formDataObj.append("resume", formData.resume);
        formDataObj.append("jobTitle", jobDetails?.JobTitle);

        try {
            await axios.post("https://example.com/api/apply", formDataObj);
            alert("Application Submitted Successfully!");
        } catch (error) {
            console.error("Error submitting application:", error);
        }
    };

    return (
        <>
            <div className="applyhead">
                <img src={applylogo} alt="Logo" className="applylogo" />
            </div>

            <div className="container applyform">
                <div className="applyformleft">
                    <h2>{jobDetails?.JobTitle || "Default Position"}</h2>
                    <h2>{jobDetails?.Location || "Default Location"}</h2>
                    <p className="formleft4">{jobDetails?.Description || "Default description"}</p>
                </div>

                <div className="applyformright">
                    <h4 className="text-center formright1">SUBMIT YOUR RESUME HERE</h4>

                    <form onSubmit={handleSubmit}>
                        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
                        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
                        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                        <input type="file" name="resume" onChange={handleChange} required />

                        <button type="submit" className="btn btn-primary applynowbutton">SUBMIT</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ApplyNow;
