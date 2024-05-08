import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import PrevFire from "./PrevFire";
import ModelDetails from "./ModelDetails"; // Import the ModelDetails component

const Home = () => {
  const [showMap, setShowMap] = useState(true); // State to toggle map visibility
  const [showRecords, setShowRecords] = useState(false); // State to toggle map visibility
  const [showModel, setShowModel] = useState(false); // State to toggle theory of our model used
  const navigate = useNavigate();
  const handleOptionClick = (option) => {
    // Logic to handle option clicks
    if (option === "prediction") {
      setShowMap(false); // Hide map when an option is clicked
      setShowRecords(false);
      // Additional logic for handling other options if needed
      setShowModel(true);
    }
    if (option === "records") {
      setShowMap(false); // Hide map when an option is clicked
      // Additional logic for handling other options if needed
      setShowModel(false);
      setShowRecords(true);
    }
    if (option === "signOut") {
      // Handle sign out functionality here
      alert("You have been signed out successfully!");
      setShowRecords(false);
      setShowMap(false);
      navigate("/login");
    }
    if (option === "home") {
      setShowMap(true); // Show map and related content for "Home" option
      setShowRecords(false);
      setShowModel(false);
    }
  };

  return (
    <div
      className="d-flex"
      style={{
        backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))",
        height: "180vh",
      }}
    >
      {/* Side Panel */}
      <Sidebar handleOptionClick={handleOptionClick} />

      {/* Main Content */}
      <div>{showRecords && <PrevFire />}</div>

      <div>
        {showModel && <ModelDetails />}{" "}
        {/* Use the ModelDetails component here */}
      </div>

      <div
        className="main-content d-flex flex-column justify-content-center align-items-center text-center vh-100"
        style={{ marginLeft: "100px" }}
      >
        {showMap && (
          <>
            <h2 style={{ marginTop: "20px" }}>Select your forest</h2>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search for a region..."
                style={{ width: "300px", padding: "8px", marginTop: "10px" }}
                // Handle search functionality here
              />
              <button style={{ marginLeft: "0px", padding: "8px" }}>
                Search
              </button>
            </div>
            {/* <div className="parent-container" style={{ padding: '20px' , marginTop: '10px' }}> */}
            <div className="map-wrapper" style={{ marginBottom: "-400px" }}>
              <div
                className="map-container"
                style={{ width: "750px", height: "550px", marginTop: "20px" }}
              >
                <MapContainer
                  center={[51.505, -0.09]}
                  zoom={13}
                  style={{ height: "100%", width: "115%" }}
                >
                  <TileLayer
                    attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {/* Add more layers or map components here if needed */}
                </MapContainer>
              </div>
              <h3 style={{ marginTop: "20px" }}>Model results</h3>
              {/* </div> */}
              <div
                className="image-grid"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <div style={{ textAlign: "center", marginRight: "20px" }}>
                  <img
                    src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/817/612/datas/gallery.jpg"
                    alt="After one day"
                    style={{ width: "200px", height: "150px" }}
                  />
                  <p>After one day</p>
                </div>
                <div style={{ textAlign: "center", marginRight: "20px" }}>
                  <img
                    src="https://pubs.acs.org/cms/10.1021/es505846r/asset/images/es505846r.social.jpeg_v03"
                    alt="After second day"
                    style={{ width: "200px", height: "150px" }}
                  />
                  <p>After second day</p>
                </div>
                <div style={{ textAlign: "center", marginRight: "20px" }}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdR2N61IDJ8X7JQ5jCJ3Nq0_4H6fr5GVU5_g&usqp=CAU"
                    alt="After third day"
                    style={{ width: "200px", height: "150px" }}
                  />
                  <p>After third day</p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://i.ytimg.com/vi/e4BxT8S17RI/maxresdefault.jpg"
                    alt="After fourth day"
                    style={{ width: "200px", height: "150px" }}
                  />
                  <p>After fourth day</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
