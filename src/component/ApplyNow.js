
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./Navbar";

const ApplyNow = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        JobTitle: "",
        location: "",
        email: "",
        resume: null
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === "file" ? files[0] : value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        const apiEndpoints = [
            "https://HotelOps.in:8080/Open_position/api/submit-resume/",
            "https://hotelopsmasterapi.azurewebsites.net/API/NileCareersAPI/PostResume"
        ];

        const formDataToSend = new FormData();
        formDataToSend.append("first_name", formData.firstname);
        formDataToSend.append("last_name", formData.lastname);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("job_title", formData.JobTitle);
        formDataToSend.append("location", formData.location);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("resume", formData.resume);

        try {
            const responses = await Promise.all(apiEndpoints.map(api =>
                fetch(api, {
                    method: "POST",
                    body: formDataToSend
                })
            ));

            const results = await Promise.all(responses.map(res => res.json()));
            console.log("API Raw Response:", JSON.stringify(results, null, 2));
            setMessage(" Resume successfully submitted!");

        } catch (error) {
            console.error("Error submitting resume:", error);
            setMessage(" Failed to submit resume. Please try again.")
        }
    };

    return (
        <>
            <Navbar />

            <div className="container applyform">
                <div className="applyformleft">
                    <div className="formleft1">
                        <h2>Default Position</h2>
                        <h2>Default Location</h2>
                    </div>
                    <h3 className="formleft2">Job Description :</h3>
                    <p className="formleft4">Default description</p>
                    <p className="formleft3">About Careers at NILE</p>
                    
                    <div className="formleft5">
                        <p><a href="https://nilehospitality.com/" style={{ color: "rgb(10, 117, 217)" }}>NILE Hospitality</a>, a distinguished third-party hotel management company in India, takes pride in its association with top Luxury Hotel Groups such as Wyndham, Hyatt, Ramada, and Radisson. Our dynamic and vertically integrated approach encompasses hotel operations, development, and rebranding services, providing exciting opportunities for hotel jobs enthusiasts. Explore our Hotel Jobs portal- <a href="http://careersatnile.com/" style={{ color: "rgb(10, 117, 217)" }}>Careers at NILE</a>, meticulously designed to feature comprehensive listings of hotel job vacancies and placements across various NILE hotels. Join us to embark on a rewarding career journey with international brands, where NILE Hospitality serves as the catalyst for turning your aspirations into reality. Discover the unique purpose of careers at NILE, as we offer not just jobs but a platform for professional growth and recognition within the vibrant world of hotel management.</p>

                    </div>

                    <h3 className="formleft6">Date Posted:</h3>
                    <p className="formleft4">Default openedon</p>

                    <h3 className="formleft6" style={{ fontFamily: "'Arial Nova', serif", marginTop: "-10px" }}>Location:</h3>
                
                
                
                </div>


                <div className="applyformright">
                    <h4 className="card-title text-center formright1">SUBMIT YOUR RESUME<br />HERE</h4>

                    <form onSubmit={handleSubmit}>
                        <div className="col-md-12">
                            <label className="control-label formrightlable">First Name</label>
                            <input type="text" className="form-control" name="firstname" onChange={handleChange} required />
                        </div>

                        <div className="col-md-12">
                            <label className="formrightlable">Last Name</label>
                            <input type="text" className="form-control" name="lastname" onChange={handleChange} required />
                        </div>

                        <div className="col-md-12">
                            <label className="formrightlable">Phone</label>
                            <input type="text" className="form-control" name="phone" placeholder="91-xxxxxxxxxx" onChange={handleChange} required />
                        </div>

                        <div className="col-md-12">
                            <label className="formrightlable">Job Title</label>
                            <select className="form-control" name="JobTitle" onChange={handleChange} required>
                                <option>--SELECT--</option>
                                <option value="ACTIVITY ASSOCIATE">ACTIVITY ASSOCIATE</option>
                                <option value="UNIFORM ATTENDANT">UNIFORM ATTENDANT</option>
                                <option value="ACTIVITY MANAGER">ACTIVITY MANAGER</option><option value="ACTIVITY TEAM LEADER">ACTIVITY TEAM LEADER</option><option value="ADMINISTRATION">ADMINISTRATION</option><option value="AIRPORT REPRESENTATIVE">AIRPORT REPRESENTATIVE</option><option value="ALL DAY DINING/ROOM SERVICE">ALL DAY DINING/ROOM SERVICE</option><option value="ASSISTANT BAR MANAGER">ASSISTANT BAR MANAGER</option><option value="ASSISTANT ENGINEERING MANAGER">ASSISTANT ENGINEERING MANAGER</option><option value="ASSISTANT F&amp;B MANAGER">ASSISTANT F&amp;B MANAGER</option><option value="ASSISTANT FINANCE MANAGER">ASSISTANT FINANCE MANAGER</option><option value="ASSISTANT FRONT OFFICE MANAGER">ASSISTANT FRONT OFFICE MANAGER</option><option value="ASSISTANT HK MANAGER">ASSISTANT HK MANAGER</option><option value="ASSISTANT HK MANAGER - VILLA">ASSISTANT HK MANAGER - VILLA</option><option value="ASSISTANT HR MANAGER">ASSISTANT HR MANAGER</option><option value="ASSISTANT MANAGER - ADD">ASSISTANT MANAGER - ADD</option><option value="ASSISTANT MANAGER - DIGITAL MARKETING">ASSISTANT MANAGER - DIGITAL MARKETING</option><option value="ASSISTANT MANAGER - F&amp;B">ASSISTANT MANAGER - F&amp;B</option><option value="ASSISTANT MANAGER - FO">ASSISTANT MANAGER - FO</option><option value="ASSISTANT MANAGER - FRONT OFFICE">ASSISTANT MANAGER - FRONT OFFICE</option><option value="ASSISTANT MANAGER - GUEST RELATIONS">ASSISTANT MANAGER - GUEST RELATIONS</option><option value="ASSISTANT MANAGER - HUMAN RESOURCE">ASSISTANT MANAGER - HUMAN RESOURCE</option><option value="ASSISTANT MANAGER - IRD">ASSISTANT MANAGER - IRD</option><option value="ASSISTANT MANAGER - KST">ASSISTANT MANAGER - KST</option><option value="ASSISTANT MANAGER - OUTLET">ASSISTANT MANAGER - OUTLET</option><option value="ASSISTANT MANAGER - PURCHASE">ASSISTANT MANAGER - PURCHASE</option><option value="ASSISTANT MANAGER - RESERVATIONS">ASSISTANT MANAGER - RESERVATIONS</option><option value="ASSISTANT MANAGER - SALES">ASSISTANT MANAGER - SALES</option><option value="ASSISTANT MANAGER - STORE">ASSISTANT MANAGER - STORE</option><option value="ASSISTANT MANAGER - TRAINING">ASSISTANT MANAGER - TRAINING</option><option value="ASSISTANT MANAGER EVENT SALES">ASSISTANT MANAGER EVENT SALES</option><option value="ASSISTANT MANAGER EVENTS">ASSISTANT MANAGER EVENTS</option><option value="ASSISTANT MANAGER FINANCE">ASSISTANT MANAGER FINANCE</option><option value="ASSISTANT MANAGER FINANCE PAYABLE">ASSISTANT MANAGER FINANCE PAYABLE</option><option value="ASSISTANT MANAGER FINANCE RECEIVABLE">ASSISTANT MANAGER FINANCE RECEIVABLE</option><option value="ASSISTANT MANAGER HOUSEKEEPING">ASSISTANT MANAGER HOUSEKEEPING</option><option value="ASSISTANT MANAGER IT">ASSISTANT MANAGER IT</option><option value="ASSISTANT MANAGER RESTAURANT">ASSISTANT MANAGER RESTAURANT</option><option value="ASSISTANT MANAGER SECURITY">ASSISTANT MANAGER SECURITY</option><option value="ASSISTANT PURCHASE MANAGER">ASSISTANT PURCHASE MANAGER</option><option value="ASSISTANT RESTAURANT MANAGER">ASSISTANT RESTAURANT MANAGER</option><option value="ASSISTANT SALES MANAGER">ASSISTANT SALES MANAGER</option><option value="ASSOCIATE DIRECTOR OF EVENTS">ASSOCIATE DIRECTOR OF EVENTS</option><option value="ASSOCIATE DIRECTOR OF EVENTS">ASSOCIATE DIRECTOR OF EVENTS</option><option value="ASSOCIATE DIRECTOR OF SALES">ASSOCIATE DIRECTOR OF SALES</option><option value="BAKERY">BAKERY</option><option value="BAKERY /PASTRY CHEF">BAKERY /PASTRY CHEF</option><option value="BANQUET">BANQUET</option><option value="BAR EXECUTIVE">BAR EXECUTIVE</option><option value="BARTENDER">BARTENDER</option><option value="BEAUTY SERVICES ">BEAUTY SERVICES </option><option value="BELL ATTENDANT">BELL ATTENDANT</option><option value="BELL CAPTAIN">BELL CAPTAIN</option><option value="CAFETERIA COOK">CAFETERIA COOK</option><option value="CARPENTER">CARPENTER</option><option value="CEO">CEO</option><option value="CHAAT">CHAAT</option><option value="CHEF DE CUISINE (CDC) - ADD">CHEF DE CUISINE (CDC) - ADD</option><option value="CHEF DE CUISINE (CDC) - ASIAN/ CHINESE">CHEF DE CUISINE (CDC) - ASIAN/ CHINESE</option><option value="CHEF DE CUISINE (CDC) - BAKERY">CHEF DE CUISINE (CDC) - BAKERY</option><option value="CHEF DE CUISINE (CDC) - CONTI">CHEF DE CUISINE (CDC) - CONTI</option><option value="CHEF DE CUISINE (CDC) - INDIAN">CHEF DE CUISINE (CDC) - INDIAN</option><option value="CHEF DE CUISINE (CDC) - SOUTH INDIAN">CHEF DE CUISINE (CDC) - SOUTH INDIAN</option><option value="CHEF DE CUISINE (CDC) - TANDOOR">CHEF DE CUISINE (CDC) - TANDOOR</option><option value="CHEF DE CUISINE (CDC) - VEG PREP">CHEF DE CUISINE (CDC) - VEG PREP</option><option value="CHEF DE PARTIE (CDP) - ADD">CHEF DE PARTIE (CDP) - ADD</option><option value="CHEF DE PARTIE (CDP) - BAKERY">CHEF DE PARTIE (CDP) - BAKERY</option><option value="CHEF DE PARTIE (CDP) - CAFETERIA">CHEF DE PARTIE (CDP) - CAFETERIA</option><option value="CHEF DE PARTIE (CDP) - CHINESE/ASIAN">CHEF DE PARTIE (CDP) - CHINESE/ASIAN</option><option value="CHEF DE PARTIE (CDP) - CONTI">CHEF DE PARTIE (CDP) - CONTI</option><option value="CHEF DE PARTIE (CDP) - INDIAN">CHEF DE PARTIE (CDP) - INDIAN</option><option value="CHEF DE PARTIE (CDP) - SOUTH INDIAN">CHEF DE PARTIE (CDP) - SOUTH INDIAN</option><option value="CHEF DE PARTIE (CDP) - TANDOOR">CHEF DE PARTIE (CDP) - TANDOOR</option><option value="CHEF DE PARTIE (CDP) - VEG PREP">CHEF DE PARTIE (CDP) - VEG PREP</option><option value="CHIEF ENGINEER">CHIEF ENGINEER</option><option value="CHIEF SECURITY OFFICER">CHIEF SECURITY OFFICER</option><option value="CLUB EXECUTIVE">CLUB EXECUTIVE</option><option value="CLUSTER GENERAL MANAGER">CLUSTER GENERAL MANAGER</option><option value="COLD SECTION">COLD SECTION</option><option value="COMMI 1">COMMI 1</option><option value="COMMI 1 - ADD">COMMI 1 - ADD</option><option value="COMMI 1 - ASIAN/CHINESE">COMMI 1 - ASIAN/CHINESE</option><option value="COMMI 1 - BAKERY">COMMI 1 - BAKERY</option><option value="COMMI 1 - CONTI">COMMI 1 - CONTI</option><option value="COMMI 1 - INDIAN">COMMI 1 - INDIAN</option><option value="COMMI 1 - SOUTH INDIAN">COMMI 1 - SOUTH INDIAN</option><option value="COMMI 1 - TANDOOR">COMMI 1 - TANDOOR</option><option value="COMMI 1 - VEG PREP">COMMI 1 - VEG PREP</option><option value="COMMI 2">COMMI 2</option><option value="COMMI 2 - ADD">COMMI 2 - ADD</option><option value="COMMI 2 - ASIAN/ CHINESE">COMMI 2 - ASIAN/ CHINESE</option><option value="COMMI 2 - BAKERY">COMMI 2 - BAKERY</option><option value="COMMI 2 - CONTI">COMMI 2 - CONTI</option><option value="COMMI 2 - INDIAN">COMMI 2 - INDIAN</option><option value="COMMI 2 - SOUTH INDIAN">COMMI 2 - SOUTH INDIAN</option><option value="COMMI 2 - TANDOOR">COMMI 2 - TANDOOR</option><option value="COMMI 2 - VEG PREP">COMMI 2 - VEG PREP</option><option value="COMMI 3">COMMI 3</option><option value="COMMI 3 - ADD">COMMI 3 - ADD</option><option value="COMMI 3 - ASIAN/ CHINESE">COMMI 3 - ASIAN/ CHINESE</option><option value="COMMI 3 - BAKERY">COMMI 3 - BAKERY</option><option value="COMMI 3 - CONTI">COMMI 3 - CONTI</option><option value="COMMI 3 - INDIAN">COMMI 3 - INDIAN</option><option value="COMMI 3 - SOUTH INDIAN">COMMI 3 - SOUTH INDIAN</option><option value="COMMI 3 - TANDOOR">COMMI 3 - TANDOOR</option><option value="COMMI 3 - VEG PREP">COMMI 3 - VEG PREP</option><option value="COMMII ">COMMII </option><option value="COMMIS 1">COMMIS 1</option><option value="COMMIS 2">COMMIS 2</option><option value="COMMIS 3">COMMIS 3</option><option value="DEMI CHEF DE PARTIE (DCDP) - ADD">DEMI CHEF DE PARTIE (DCDP) - ADD</option><option value="DEMI CHEF DE PARTIE (DCDP) - ASIAN/CHINESE">DEMI CHEF DE PARTIE (DCDP) - ASIAN/CHINESE</option><option value="DEMI CHEF DE PARTIE (DCDP) - BAKERY">DEMI CHEF DE PARTIE (DCDP) - BAKERY</option><option value="DEMI CHEF DE PARTIE (DCDP) - CONTI">DEMI CHEF DE PARTIE (DCDP) - CONTI</option><option value="DEMI CHEF DE PARTIE (DCDP) - INDIAN">DEMI CHEF DE PARTIE (DCDP) - INDIAN</option><option value="DEMI CHEF DE PARTIE (DCDP) - SOUTH INDIAN">DEMI CHEF DE PARTIE (DCDP) - SOUTH INDIAN</option><option value="DEMI CHEF DE PARTIE (DCDP) - TANDOOR">DEMI CHEF DE PARTIE (DCDP) - TANDOOR</option><option value="DEMI CHEF DE PARTIE (DCDP) - VEG PREP">DEMI CHEF DE PARTIE (DCDP) - VEG PREP</option><option value="DIRECTOR OF  SALES AND MARKETING">DIRECTOR OF  SALES AND MARKETING</option><option value="DIRECTOR OF EVENT SALES">DIRECTOR OF EVENT SALES</option><option value="DIRECTOR OF EVENTS">DIRECTOR OF EVENTS</option><option value="DIRECTOR OF FINANCE">DIRECTOR OF FINANCE</option><option value="DIRECTOR OF FOOD AND BEVERAGE">DIRECTOR OF FOOD AND BEVERAGE</option><option value="DIRECTOR OF HR">DIRECTOR OF HR</option><option value="DIRECTOR OF ROOMS">DIRECTOR OF ROOMS</option><option value="DIRECTOR OF SALES">DIRECTOR OF SALES</option><option value="DRIVER">DRIVER</option><option value="DRIVER">DRIVER</option><option value="DRIVER">DRIVER</option><option value="EMPLOYEE RELATIONS MANAGER">EMPLOYEE RELATIONS MANAGER</option><option value="ENGINEERING MANAGER">ENGINEERING MANAGER</option><option value="ENGINEERING TEAM LEADER">ENGINEERING TEAM LEADER</option><option value="ENGINEERING TEAM LEADER">ENGINEERING TEAM LEADER</option><option value="EVENT SALES COORDINATOR">EVENT SALES COORDINATOR</option><option value="EVENT SALES EXECUTIVE">EVENT SALES EXECUTIVE</option><option value="EVENT SALES MANAGER">EVENT SALES MANAGER</option><option value="EVENTS ASSOCIATE">EVENTS ASSOCIATE</option><option value="EVENTS EXECUTIVE">EVENTS EXECUTIVE</option><option value="EVENTS MANAGER (OPERATIONS)">EVENTS MANAGER (OPERATIONS)</option><option value="EXECUTIVE ASSISTANT MANAGER">EXECUTIVE ASSISTANT MANAGER</option><option value="EXECUTIVE CHEF">EXECUTIVE CHEF</option><option value="EXECUTIVE HOUSEKEEPER">EXECUTIVE HOUSEKEEPER</option><option value="EXECUTIVE SECRETARY">EXECUTIVE SECRETARY</option><option value="EXECUTIVE SOUS CHEF">EXECUTIVE SOUS CHEF</option><option value="EXPERIENCE SPECIALIST">EXPERIENCE SPECIALIST</option><option value="EXPERIENCE SPECIALIST">EXPERIENCE SPECIALIST</option><option value="F&amp;B ASSOCIATE">F&amp;B ASSOCIATE</option><option value="F&amp;B ASSOCIATE">F&amp;B ASSOCIATE</option><option value="F&amp;B ASSOCIATE">F&amp;B ASSOCIATE</option><option value="F&amp;B ASSOCIATE - BAR">F&amp;B ASSOCIATE - BAR</option><option value="F&amp;B ASSOCIATE - OUTLET">F&amp;B ASSOCIATE - OUTLET</option><option value="F&amp;B ATTENDANT">F&amp;B ATTENDANT</option><option value="F&amp;B CONTROLLER">F&amp;B CONTROLLER</option><option value="F&amp;B EXECUTIVE">F&amp;B EXECUTIVE</option><option value="F&amp;B EXECUTIVE">F&amp;B EXECUTIVE</option><option value="F&amp;B EXECUTIVE">F&amp;B EXECUTIVE</option><option value="F&amp;B EXECUTIVE - OUTLET">F&amp;B EXECUTIVE - OUTLET</option><option value="F&amp;B GUEST RELATIONS EXECUTIVE">F&amp;B GUEST RELATIONS EXECUTIVE</option><option value="F&amp;B TEAM LEADER">F&amp;B TEAM LEADER</option><option value="F&amp;B TEAM LEADER">F&amp;B TEAM LEADER</option><option value="F&amp;B TRAINEE SUPERVISOR">F&amp;B TRAINEE SUPERVISOR</option><option value="FINANCE ASSOCIATE">FINANCE ASSOCIATE</option><option value="FINANCE ASSOCIATE - COST CONTROL">FINANCE ASSOCIATE - COST CONTROL</option><option value="FINANCE ASSOCIATE - PAYABLE">FINANCE ASSOCIATE - PAYABLE</option><option value="FINANCE ASSOCIATE - RECEIVABLE">FINANCE ASSOCIATE - RECEIVABLE</option><option value="FINANCE CONTROLLER">FINANCE CONTROLLER</option><option value="FINANCE EXECUTIVE - PAYABLE">FINANCE EXECUTIVE - PAYABLE</option><option value="FINANCE EXECUTIVE - RECEIVABLE">FINANCE EXECUTIVE - RECEIVABLE</option><option value="FINANCE MANAGER">FINANCE MANAGER</option><option value="FINANCE TEAM LEADER - INCOME">FINANCE TEAM LEADER - INCOME</option><option value="FINANCE TEAM LEADER - PAYABLE">FINANCE TEAM LEADER - PAYABLE</option><option value="FINANCE TEAM LEADER - RECEIVABLE">FINANCE TEAM LEADER - RECEIVABLE</option><option value="FIRE OFFICER">FIRE OFFICER</option><option value="FITNESS TRAINER">FITNESS TRAINER</option><option value="FOOD AND BEVERAGE MANAGER">FOOD AND BEVERAGE MANAGER</option><option value="FRONT OFFICE EXECUTIVE">FRONT OFFICE EXECUTIVE</option><option value="FRONT OFFICE EXECUTIVE">FRONT OFFICE EXECUTIVE</option><option value="FRONT OFFICE MANAGER">FRONT OFFICE MANAGER</option><option value="GAMES ASSOCIATE">GAMES ASSOCIATE</option><option value="GARDENER">GARDENER</option><option value="GENERAL MANAGER">GENERAL MANAGER</option><option value="GUEST EXPERIENCE MANAGER">GUEST EXPERIENCE MANAGER</option><option value="GUEST EXPERIENCE MANAGER/ EXPERIENCE SPECIALIST">GUEST EXPERIENCE MANAGER/ EXPERIENCE SPECIALIST</option><option value="GUEST RELATION EXECUTIVE">GUEST RELATION EXECUTIVE</option><option value="GUEST RELATIONS ASSOCIATE">GUEST RELATIONS ASSOCIATE</option><option value="GUEST RELATIONS ASSOCIATE/ ASSISTANT - VILLA">GUEST RELATIONS ASSOCIATE/ ASSISTANT - VILLA</option><option value="GUEST RELATIONS MANAGER">GUEST RELATIONS MANAGER</option><option value="GUEST RELATIONS MANAGER">GUEST RELATIONS MANAGER</option><option value="GUEST SERVICE AGENT">GUEST SERVICE AGENT</option><option value="GUEST SERVICE AGENT">GUEST SERVICE AGENT</option><option value="GUEST SERVICE ASSOCIATE">GUEST SERVICE ASSOCIATE</option><option value="GUEST SERVICE ASSOCIATE - CONTACT CENTER">GUEST SERVICE ASSOCIATE - CONTACT CENTER</option><option value="GUEST SERVICE ASSOCIATE (FRONT DESK)">GUEST SERVICE ASSOCIATE (FRONT DESK)</option><option value="GUEST SERVICE CENTER ASSOCIATE">GUEST SERVICE CENTER ASSOCIATE</option><option value="HAIR DRESSER">HAIR DRESSER</option><option value="HALWAI">HALWAI</option><option value="HALWAI ASSOCIATE">HALWAI ASSOCIATE</option><option value="HEAD CHEF">HEAD CHEF</option><option value="HEALTH CLUB ATTENDANT">HEALTH CLUB ATTENDANT</option><option value="HK DESK ASSOCIATE">HK DESK ASSOCIATE</option><option value="HK SUPERVISOR - VILLA">HK SUPERVISOR - VILLA</option><option value="HORTICULTURE ASSOCIATE">HORTICULTURE ASSOCIATE</option><option value="HORTICULTURE EXECUTIVE">HORTICULTURE EXECUTIVE</option><option value="HORTICULTURE TEAM LEADER">HORTICULTURE TEAM LEADER</option><option value="HORTICULTURIST">HORTICULTURIST</option><option value="HOSTESS">HOSTESS</option><option value="HOSTESS">HOSTESS</option><option value="HOSTESS">HOSTESS</option><option value="HOSTESS - BAR">HOSTESS - BAR</option><option value="HOSTESS - OUTLET">HOSTESS - OUTLET</option><option value="HOTEL MANAGER">HOTEL MANAGER</option><option value="HOTEL OPERATIONAL TRAINEE - FO">HOTEL OPERATIONAL TRAINEE - FO</option><option value="HOTEL OPERATIONAL TRAINEE - HK">HOTEL OPERATIONAL TRAINEE - HK</option><option value="HOUSEKEEPING ASSOCIATE">HOUSEKEEPING ASSOCIATE</option><option value="HOUSEKEEPING ASSOCIATE (PUBLIC AREA)">HOUSEKEEPING ASSOCIATE (PUBLIC AREA)</option><option value="HOUSEKEEPING ASSOCIATES CONTRACT">HOUSEKEEPING ASSOCIATES CONTRACT</option><option value="HOUSEKEEPING ATTENDANT/ ASSOCIATE (CONTRACT)">HOUSEKEEPING ATTENDANT/ ASSOCIATE (CONTRACT)</option><option value="HOUSEKEEPING EXECUTIVE">HOUSEKEEPING EXECUTIVE</option><option value="HOUSEKEEPING EXECUTIVE (PUBLIC AREA)">HOUSEKEEPING EXECUTIVE (PUBLIC AREA)</option><option value="HOUSEKEEPING MANAGER">HOUSEKEEPING MANAGER</option><option value="HOUSEKEEPING SUPERVISOR">HOUSEKEEPING SUPERVISOR</option><option value="HOUSEKEEPING SUPERVISOR (PUBLIC AREA)">HOUSEKEEPING SUPERVISOR (PUBLIC AREA)</option><option value="HOUSEKEEPING TEAM LEADER">HOUSEKEEPING TEAM LEADER</option><option value="HR ASSOCIATE">HR ASSOCIATE</option><option value="HR COORDINATOR">HR COORDINATOR</option><option value="HR EXECUTIVE">HR EXECUTIVE</option><option value="HUMAN RESOURCES MANAGER">HUMAN RESOURCES MANAGER</option><option value="HYGIENIST">HYGIENIST</option><option value="INDIAN RESTAURANT">INDIAN RESTAURANT</option><option value="IT ASSOCIATE">IT ASSOCIATE</option><option value="IT EXECUTIVE">IT EXECUTIVE</option><option value="IT MANAGER">IT MANAGER</option><option value="JR. SOUS CHEF - ADD">JR. SOUS CHEF - ADD</option><option value="JR. SOUS CHEF - ASIAN">JR. SOUS CHEF - ASIAN</option><option value="JR. SOUS CHEF - BAKERY">JR. SOUS CHEF - BAKERY</option><option value="JR. SOUS CHEF - CONTI">JR. SOUS CHEF - CONTI</option><option value="JR. SOUS CHEF - INDIAN">JR. SOUS CHEF - INDIAN</option><option value="JR. SOUS CHEF - SOUTH INDIAN">JR. SOUS CHEF - SOUTH INDIAN</option><option value="JR. SOUS CHEF - TANDOOR">JR. SOUS CHEF - TANDOOR</option><option value="JR. SOUS CHEF - VEG PREP">JR. SOUS CHEF - VEG PREP</option><option value="KIDS CLUB ASSOCIATE">KIDS CLUB ASSOCIATE</option><option value="KITCHEN STEWARD (CONTRACT- CAFETERIA)">KITCHEN STEWARD (CONTRACT- CAFETERIA)</option><option value="KITCHEN STEWARDING - TEAM LEADER">KITCHEN STEWARDING - TEAM LEADER</option><option value="KITCHEN STEWARDING ASSOCIATE">KITCHEN STEWARDING ASSOCIATE</option><option value="KITCHEN STEWARDING ASSOCIATE">KITCHEN STEWARDING ASSOCIATE</option><option value="KITCHEN STEWARDING EXECUTIVE">KITCHEN STEWARDING EXECUTIVE</option><option value="KST MANAGER">KST MANAGER</option><option value="LAUNDRY ASSOCIATE">LAUNDRY ASSOCIATE</option><option value="LAUNDRY ATTENDANT (CONTRACT)">LAUNDRY ATTENDANT (CONTRACT)</option><option value="LAUNDRY EXECUTIVE">LAUNDRY EXECUTIVE</option><option value="LAUNDRY MANAGER">LAUNDRY MANAGER</option><option value="LIFE GUARD">LIFE GUARD</option><option value="MAHARAJ">MAHARAJ</option><option value="MAINTENANCE EXECUTIVE">MAINTENANCE EXECUTIVE</option><option value="MAINTENANCE OFFICER">MAINTENANCE OFFICER</option><option value="MAKEUP &amp; HAIR STYLIST ">MAKEUP &amp; HAIR STYLIST </option><option value="MANAGEMENT TRAINEE - CULINARY">MANAGEMENT TRAINEE - CULINARY</option><option value="MANAGEMENT TRAINEE - F&amp;B SERVICE">MANAGEMENT TRAINEE - F&amp;B SERVICE</option><option value="MANAGEMENT TRAINEE - FO">MANAGEMENT TRAINEE - FO</option><option value="MANAGEMENT TRAINEE - HK">MANAGEMENT TRAINEE - HK</option><option value="MANAGEMENT TRAINEE - HR">MANAGEMENT TRAINEE - HR</option><option value="MANAGEMENT TRAINEE - MARKETING">MANAGEMENT TRAINEE - MARKETING</option><option value="MANAGEMENT TRAINEE - SALES">MANAGEMENT TRAINEE - SALES</option><option value="MANAGER - RECEIVABLE">MANAGER - RECEIVABLE</option><option value="MARCOM EXECUTIVE">MARCOM EXECUTIVE</option><option value="MARCOM MANAGER">MARCOM MANAGER</option><option value="MULTI SKILL TECHNICIAN">MULTI SKILL TECHNICIAN</option><option value="OPERATIONS MANAGER">OPERATIONS MANAGER</option><option value="OUTLET MANAGER">OUTLET MANAGER</option><option value="PAINTER">PAINTER</option><option value="PASTRY / CHOCOLATE">PASTRY / CHOCOLATE</option><option value="POLISHER">POLISHER</option><option value="POOL ATTENDANT">POOL ATTENDANT</option><option value="PROJECT EXECUTIVE">PROJECT EXECUTIVE</option><option value="PROJECT MANAGER">PROJECT MANAGER</option><option value="PURCHASE ASSOCIATE">PURCHASE ASSOCIATE</option><option value="PURCHASE EXECUTIVE">PURCHASE EXECUTIVE</option><option value="PURCHASE MANAGER">PURCHASE MANAGER</option><option value="PURCHASE TEAM LEADER">PURCHASE TEAM LEADER</option><option value="RECEIVING CLERK">RECEIVING CLERK</option><option value="RESERVATION ASSOCIATE">RESERVATION ASSOCIATE</option><option value="RESERVATION EXECUTIVE">RESERVATION EXECUTIVE</option><option value="RESERVATION MANAGER">RESERVATION MANAGER</option><option value="RESERVATION TEAM LEADER">RESERVATION TEAM LEADER</option><option value="RESTAURANT MANAGER">RESTAURANT MANAGER</option><option value="RESTAURANT MANAGER">RESTAURANT MANAGER</option><option value="RESTAURANT MANAGER">RESTAURANT MANAGER</option><option value="REVENUE MANAGER (SHARED SERVICES)">REVENUE MANAGER (SHARED SERVICES)</option><option value="ROOM SERVICE ORDER TAKER - (RSOT)">ROOM SERVICE ORDER TAKER - (RSOT)</option><option value="ROOMS DIVISION MANAGER">ROOMS DIVISION MANAGER</option><option value="SALES COORDINATOR">SALES COORDINATOR</option><option value="SALES EXECUTIVE">SALES EXECUTIVE</option><option value="SALES MANAGER">SALES MANAGER</option><option value="SECURITY EXECUTIVE">SECURITY EXECUTIVE</option><option value="SECURITY GUARD">SECURITY GUARD</option><option value="SECURITY GUARD (CONTRACT)">SECURITY GUARD (CONTRACT)</option><option value="SECURITY MANAGER">SECURITY MANAGER</option><option value="SECURITY SUPERVISOR">SECURITY SUPERVISOR</option><option value="SECURITY TEAM LEADER">SECURITY TEAM LEADER</option><option value="SOUS CHEF">SOUS CHEF</option><option value="SOUS CHEF">SOUS CHEF</option><option value="SPA MANAGER">SPA MANAGER</option><option value="SPA RECEPTIONIST">SPA RECEPTIONIST</option><option value="SPA THERAPIST">SPA THERAPIST</option><option value="SPECIALITY RESTAURANT">SPECIALITY RESTAURANT</option><option value="STORE ASSOCIATE">STORE ASSOCIATE</option><option value="STORE EXECUTIVE">STORE EXECUTIVE</option><option value="STORE TEAM LEADER">STORE TEAM LEADER</option><option value="TAILOR">TAILOR</option><option value="TAILOR (CONTRACT)">TAILOR (CONTRACT)</option><option value="TEAM LEADER - BAR">TEAM LEADER - BAR</option><option value="TEAM LEADER - EVENTS">TEAM LEADER - EVENTS</option><option value="TEAM LEADER - F&amp;B - OUTLET">TEAM LEADER - F&amp;B - OUTLET</option><option value="TEAM LEADER - FRONT OFFICE">TEAM LEADER - FRONT OFFICE</option><option value="TEAM LEADER - IRD">TEAM LEADER - IRD</option><option value="TEAM LEADERS">TEAM LEADERS</option><option value="TECHNICIAN- HVAC">TECHNICIAN- HVAC</option><option value="TECHNICIAN-ELECTRICAL">TECHNICIAN-ELECTRICAL</option><option value="TECHNICIAN-MECHANICAL">TECHNICIAN-MECHANICAL</option><option value="TECHNICIAN-PLUMBING">TECHNICIAN-PLUMBING</option><option value="TECHNICIAN-STP">TECHNICIAN-STP</option><option value="TRAINEE SUPERVISOR - HK">TRAINEE SUPERVISOR - HK</option><option value="TRAINING EXECUTIVE">TRAINING EXECUTIVE</option><option value="TRAINING MANAGER">TRAINING MANAGER</option>




                            </select>
                        </div>

                        <div className="col-md-12">
                            <label className="formrightlable">Location</label>
                            <select className="form-control" name="location" onChange={handleChange} required>
                                <option>All Location</option>
                                <option value="BHAIRAVGARH PALACE UDAIPUR">BHAIRAVGARH PALACE UDAIPUR</option>
                                <option value="YAVATMAL">YAVATMAL</option>
                                <option value="COUNTRY INN,MYSORE">COUNTRY INN,MYSORE</option><option value="GIFT CITY CLUB, A MEMBER OF RADISSON INDIVIDUALS">GIFT CITY CLUB, A MEMBER OF RADISSON INDIVIDUALS</option><option value="HAWTHORN SUITES BY WYNDHAM, DWARKA">HAWTHORN SUITES BY WYNDHAM, DWARKA</option><option value="HOWARD JOHNSON BY WYNDHAM, UDAIPUR">HOWARD JOHNSON BY WYNDHAM, UDAIPUR</option><option value="HYATT CENTRIC DEHRADUN">HYATT CENTRIC DEHRADUN</option><option value="HYATT PLACE HARIDWAR">HYATT PLACE HARIDWAR</option><option value="HYATT PLACE VIJAYAWADA">HYATT PLACE VIJAYAWADA</option><option value="HYATT REGENCY GHAZIABAD">HYATT REGENCY GHAZIABAD</option><option value="NILE HOTEL MANAGEMENT COMPANY">NILE HOTEL MANAGEMENT COMPANY</option><option value="RADISSON HOTEL KANDLA">RADISSON HOTEL KANDLA</option><option value="RAMADA BY WYNDHAM, RANCHI">RAMADA BY WYNDHAM, RANCHI</option><option value="RAMADA ENCORE BY WYNDHAM AMRITSAR">RAMADA ENCORE BY WYNDHAM AMRITSAR</option><option value="RAMADA ENCORE BY WYNDHAM, INDORE">RAMADA ENCORE BY WYNDHAM, INDORE</option><option value="RAMADA ENCORE BY WYNDHAM, UDAIPUR">RAMADA ENCORE BY WYNDHAM, UDAIPUR</option><option value="THE CHINAR RESORT &amp; SPA, PAHALGAM">THE CHINAR RESORT &amp; SPA, PAHALGAM</option><option value="THE EARTH&nbsp;AMRITSAR">THE EARTH&nbsp;AMRITSAR</option><option value="THE NEEMAYA GANDHIDHAM">THE NEEMAYA GANDHIDHAM</option><option value="TIME SQUARE CLUB, RESORT &amp; SPA BHUJ - GUJARAT">TIME SQUARE CLUB, RESORT &amp; SPA BHUJ - GUJARAT</option><option value="TULSI BHAVAN AYODHYA">TULSI BHAVAN AYODHYA</option><option value="UDAY PALACE NAVSARI, A MEMBER OF RADISSON&nbsp;INDIVIDUALS">UDAY PALACE NAVSARI, A MEMBER OF RADISSON&nbsp;INDIVIDUALS</option>
                            </select>
                        </div>

                        <div className="col-md-12">
                            <label className="formrightlable">UPLOAD YOUR RESUME</label>
                            <input type="file" className="form-control" name="resume" onChange={handleChange} required />
                        </div>

                        <div className="col-md-12">
                            <label className="formrightlable">Email</label>
                            <input type="email" className="form-control" name="email" onChange={handleChange} required />
                        </div>

                        <div className="col-md-12 text-center">
                            <button type="submit" className="btn btn-primary applynowbutton btn-sm">SUBMIT</button>
                        </div>

                        {message && (
                            <div className={`alert ${message.includes("✅") ? "alert-success" : "alert-danger"} text-center mt-3`} role="alert">
                                {message}
                            </div>
                        )}
                    </form>
                </div>
            </div>

            <div className="col-2 jobsection7 applynowicon">
                <div className="social-icons" style={{ fontSize: "1.8rem", display: "flex", gap: "10px" }}>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://careersatnile.com" className="icons">
                        <FontAwesomeIcon icon={faFacebook} style={{ color: "#1877F2" }} />
                    </a>
                    <a href="https://www.linkedin.com/shareArticle?url=https://careersatnile.com" className="icons">
                        <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0077B5" }} />
                    </a>
                    <a href="https://instagram.com/nilehospitality/" className="icons">
                        <FontAwesomeIcon icon={faInstagram} style={{ color: "#E1306C" }} />
                    </a>
                </div>
            </div>
        </>
    );
};

export default ApplyNow;
