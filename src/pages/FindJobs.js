import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { MdKeyboardArrowRight } from "react-icons/md";
import Navbar from '../component/Navbar';
import { DepartmentList } from '../Service Api/DepartmentList';
import { LocationList } from '../Service Api/LocationList';
import { PositionList } from '../Service Api/PositionList';
import SidebarCarousel from '../component/SidebarCarousal';
import { useNavigate } from 'react-router-dom';
import Footer from '../component/Footer';

const FindJobs = () => {
  const [departments, setDepartments] = useState([]);
  const [locations, setLocations] = useState([]);
  const [positions, setPositions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [count, setCount] = useState(8);
  const navigate = useNavigate();  
  // Fetch departments
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

  // Fetch locations
  useEffect(() => {
    const getLocations = async () => {
      try {
        const data = await LocationList();
        setLocations(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };
    getLocations();
  }, []);

  // Fetch positions with count logic
  useEffect(() => {
    const getPositions = async () => {
      try {
        const data = await PositionList();
        if (Array.isArray(data)) {
          setPositions(data);
          setSearchResults(data.slice(count - 8, count));
        }
      } catch (error) {
        console.error("Error fetching positions:", error);
      }
    };
    getPositions();
  }, [count]);

  // Handle Search
  const handleSearch = () => {
    const filteredData = positions.filter(item =>
      (selectedDepartment === "All Departments" || item.Department === selectedDepartment) &&
      (selectedLocation === "All Locations" || item.Location === selectedLocation)
    );
    setSearchResults(filteredData.slice(count - 8, count));
  };
 
  const handleApply = async (url_slug) => {
    if (!url_slug ) {
      console.error("Job title or location is missing!");
      return;
    }
  
    navigate(`/applynow?jobtitle=${encodeURIComponent(url_slug)}`);
  };
  
  

  return (
    <>
      <Navbar />
      <div className='findjobpage'>
      <div className="findjobbody">
        <div className="findjobbodyhead">
          <div className="jobsection1">
            <h1>Building careers, one step at a time</h1>
          </div>
          <div className="jobsection2">
            “Are you seeking exciting &nbsp;

            <a style={{ color: '#1e293b' }} href="https://careersatnile.com/career-advice/">
              <b>Career opportunities</b>
            </a>&nbsp;
            with international hotel brands? Explore a variety of hotel jobs worldwide within the global hospitality sector.
            Join our community of job seekers today and unlock your future in the world of international brands and hotel jobs.”
          </div>
        </div>
      </div>

      <div className="container-fluid findjobsection">
        <div className="row">
          <div className="col-lg-9 col-12 jobsection">
            <div className="jobsection3">
              <div className="jobsection4">
                {/* Department Dropdown */}
                <div className="dropdown heightderp">
                  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                    {selectedDepartment}
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <button className="Departmentsbutton" onClick={() => setSelectedDepartment("All Departments")}>
                        All Departments
                      </button>
                    </li>
                    <hr className="fjline liline" />
                    {departments.map((item, index) => (
                      <React.Fragment key={index}>
                        <li>
                          <button className="Departmentsbutton" onClick={() => setSelectedDepartment(item.Department)}>
                            {item.Department}
                          </button>
                        </li>
                        <hr className="fjline liline" />
                      </React.Fragment>
                    ))}
                  </ul>
                </div>

                {/* Location Dropdown */}
                <div className="dropdown">
                  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                    {selectedLocation}
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <button className="Departmentsbutton" onClick={() => setSelectedLocation("All Locations")}>
                        All Locations
                      </button>
                    </li>
                    <hr className="fjline liline" />
                    {locations.map((item, index) => (
                      <React.Fragment key={index}>
                        <li className="locationli">
                          <button className="Departmentsbutton" onClick={() => setSelectedLocation(item.Hotel_Career_Name)}>
                            {item.Hotel_Career_Name}
                          </button>
                        </li>
                        <hr className="fjline liline" />
                      </React.Fragment>
                    ))}
                  </ul>
                </div>

                <button className="searchbutton" onClick={handleSearch}>Search</button>
              </div>
            </div>

            {/* Job Listing Section */}
            <div className="jobsection5">
              <div className="job-list">
                {searchResults.length > 0 ? (
                  searchResults.map((item, index) => (
                    <article key={item.url_slug || index} className="job-card">
                      <div className="job-logo-wrap">
                        <img src={item.LogoImage} alt={`${item.Location || "Hotel"} logo`} className="job-logo" />
                      </div>
                      <div className="job-copy">
                        <h3>{item.JobTitle}</h3>
                        <p>{item.Location}</p>
                      </div>
                      <div className="job-actions">
                        <div className="job-socials" aria-label="Share this vacancy">
                          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin + `/applynow?jobtitle=${item.url_slug}`)}`} target="_blank" rel="noreferrer" aria-label="Share on Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin + `/applynow?jobtitle=${item.url_slug}`)}`} target="_blank" rel="noreferrer" aria-label="Share on LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
                          <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${item.JobTitle} - ${window.location.origin}/applynow?jobtitle=${item.url_slug}`)}`} target="_blank" rel="noreferrer" aria-label="Share on WhatsApp"><FontAwesomeIcon icon={faWhatsapp} /></a>
                        </div>
                        <button className="job-apply-button" onClick={() => handleApply(item.url_slug)}>
                          Apply now <MdKeyboardArrowRight />
                        </button>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="alert alert-primary no-positions" role="alert">
                No positions available
                   </div>

                )}
                {/* Pagination */}
                <div className="job-pagination">
                  {[1, 2, 3, 4].map((num) => (
                    <button key={num} className={`nextnow ${count === num * 8 ? "active" : ""}`} onClick={() => setCount(num * 8)}>
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Section */}
          <aside className="col-lg-3 col-12 job-carousel-column">
            
           <SidebarCarousel/>


          </aside>
        </div>
      </div>

      <div className='container-fluide fjnile'>
         <h2 className='fjnileabout'>NILE Hospitality</h2>

         <div class="fjnileabout1"> If you’re looking for a great place to further advance your hotel management career, consider <u><b ><a href="https://nilehospitality.com/" style={{color:"blue"}}>NILE Hospitality</a></b></u>. </div>

         <div class="fjnileabout2"> We offer a unique opportunity for those interested in staying updated with the latest trends in the hospitality industry. Joining us at NILE Hospitality, your career can flourish in the ever-evolving world of hospitality. </div>

         <div class="fjnileabout2"> Embrace endless growth as we prioritize your professional development. Our commitment to continuous learning keeps you at the forefront of industry trends. Within our culture of excellence, we celebrate outstanding achievements and prioritize personal growth. </div>

         <div class="fjnileabout2"> Moreover, we firmly believe in nurturing talent from within, offering you unlimited opportunities for career advancement. Join our organization, with its impressive global presence, and become an integral part of our diverse and inclusive team. </div>

         <div class="fjnileabout2"> 1. Hotel jobs offer remarkable opportunities with famous international brands.<br/> 2. Furthermore, Hotelcareer provides access to an array of global job openings.<br/> 3. Moreover, if you enjoy welcoming people and aspire to work with renowned hotels, the hotel industry is perfect.<br/> 4. It’s a dynamic career that centers on guest happiness.<br/> 5. Additionally, you can grow, learn, and create memories for guests from all backgrounds.<br/> 6. Lastly, join our global hotel career team for exceptional service and unforgettable experiences.<br/> </div>

         <button className='fjcareerbtn' > Career Advice</button>

      </div>
   
   </div>
   <Footer/>
    </>
  );
};

export default FindJobs;
