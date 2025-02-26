import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { MdKeyboardArrowRight } from "react-icons/md";
import Navbar from '../component/Navbar';
import { DepartmentList } from '../Service Api/DepartmentList';
import { LocationList } from '../Service Api/LocationList';
import { PositionList } from '../Service Api/PositionList';

const FindJobs = () => {
  const [departments, setDepartments] = useState([]);
  const [location, setLocation] = useState([]);
  const [position, setPosition] = useState([]);
  
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [count, setCount] = useState(8);
  useEffect(() => {
    const getDepartments = async () => {
      try {
        const data = await DepartmentList();
        setDepartments(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching department list:", error);
      }
    };
    getDepartments();
  }, []);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const allLocation = await LocationList();
        setLocation(Array.isArray(allLocation) ? allLocation : []);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };
    getLocation();
  }, []);

  useEffect(() => {
    const getOpenPosition = async () => {
      try {
        const openPosition = await PositionList();
        setPosition(Array.isArray(openPosition) ? openPosition.slice(count - 8,count) : []);
      } catch (error) {
        console.error("Error fetching positions:", error);
      }
    };
    getOpenPosition();
  }, [count]);



  return (
    <>
      <Navbar />
      <div className="findjobbody">
        <div className="findjobbodyhead">
          <div className="jobsection1">
            <h1>Building careers, one step at a time</h1>
          </div>
          <div className="jobsection2">
            “Are you seeking exciting
            <a style={{ color: '#1e293b' }} href="https://careersatnile.com/career-advice/">
              <b>Career opportunities</b>
            </a>
            with international hotel brands? Explore a variety of hotel jobs worldwide within the global hospitality sector.
            Join our community of job seekers today and unlock your future in the world of international brands and hotel jobs.”
          </div>
        </div>
      </div>

      <div className="container-fluid findjobsection">
        <div className="row">
          <div className="col-9 jobsection">
            <div className="jobsection3">
              <div className="jobsection4">

                {/* Department Dropdown */}
                <div className="dropdown heightderp">
                  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                    {selectedDepartment}
                  </button>
                  <ul className="dropdown-menu">
                    {departments.length > 0 ? (
                      departments.map((item, index) => (
                        <React.Fragment key={index}>
                          <li>
                            <button
                              className="Departmentsbutton"
                              onClick={() => setSelectedDepartment(item?.Department || "Unnamed Department")}
                            >
                              {item?.name || item?.Department || "Unnamed Department"}
                            </button>
                          </li>
                          <hr className="fjline liline" />
                        </React.Fragment>
                      ))
                    ) : (
                      <li>No departments found</li>
                    )}
                  </ul>
                </div>

                {/* Location Dropdown */}
                <div className="dropdown">
                  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                    {selectedLocation}
                  </button>
                  <ul className="dropdown-menu">
                    {location.length > 0 ? (
                      location.map((item, index) => (
                        <React.Fragment key={index}>
                          <li className="locationli">
                            <button
                              className="Departmentsbutton"
                              onClick={() => setSelectedLocation(item?.Hotel_Career_Name)}
                            >
                              {item.Hotel_Career_Name}
                            </button>
                          </li>
                          <hr className="fjline liline" />
                        </React.Fragment>
                      ))
                    ) : (
                      <li>Location not found</li>
                    )}
                  </ul>
                </div>

                <button className="searchbutton">Search</button>
              </div>
            </div>

            {/* Job Listing Section */}
            {/* <div data-aos="zoom-in-right"></div> */}
            <div className="container-fluid jobsection5">
              <div className="row ">
                {position.length > 0 ? (
                  position.map((item, index) => (
                    <div key={index} className="row job-item positionlist" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                      
                      <div className="col-1 jobsection5logo">
                        <img src={item.LogoImage} alt="Company Logo" className="jobsection5logoimg" />
                      </div>
                      <div className="col-8 jobsection6">
                        <p className="guest">{item.JobTitle}</p>
                        <p className="subguset">{item.Location}</p>
                      </div>
                      <div className="col-2 jobsection7">
                        <div className="social-icons" style={{ fontSize: "1.8rem", display: "flex", gap: "10px" }}>
                          <FontAwesomeIcon icon={faFacebook} style={{ color: "#1877F2" }} />
                          <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0077B5" }} />
                          <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#25D366" }} />
                        </div>
                        <button className="applynow">
                          Apply Now <MdKeyboardArrowRight className="icon" />
                        </button>
                      </div>
                      <hr className="fjline2" />
                    </div>
                    
                  ))
                ) : (
                  <p>No positions available</p>
                )}
               <div className="text-center mt-3">
  {[1, 2, 3, 4].map((num) => (
    <button
      key={num}
      className={`nextnow ${count === num * 8 ? "active" : ""}`}
      onClick={() => setCount(num * 8)}
    >
      {num}
    </button>
  ))}
</div>


              </div>
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="col-3 bg-warning">
            <h1>Vasu</h1>
            <h1>Vasu</h1>
            <h1>Vasu</h1>
            <h1>Vasu</h1>
            <h1>Vasu</h1>
            <h1>Vasu</h1>
          </div>
        </div>
      </div>

      <h1>Gourab</h1>
      <h1>Gourab</h1>
      <h1>Gourab</h1>
      <h1>Gourab</h1>
      <h1>Gourab</h1>
      <h1>Gourab</h1>
    </>
  );
};

export default FindJobs;
