import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import PrevFire from "./PrevFire";
import ModelDetails from "./ModelDetails";
import GoogleMap from "./Map"; // Import the GoogleMap component

const Home = () => {
  const [showMap, setShowMap] = useState(true);
  const [showRecords, setShowRecords] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    if (option === "prediction") {
      setShowRecords(false);
      setShowModel(true);
      setShowMap(false);
    }
    if (option === "records") {
      setShowModel(false);
      setShowRecords(true);
      setShowMap(false);
    }
    if (option === "signOut") {
      alert("You have been signed out successfully!");
      setShowRecords(false);
      setShowModel(false);
      setShowMap(false);
      navigate("/login");
    }
    if (option === "home") {
      setShowRecords(false);
      setShowModel(false);
      setShowMap(true);
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
      <Sidebar handleOptionClick={handleOptionClick} />

      <div>{showRecords && <PrevFire />}</div>

      <div>{showModel && <ModelDetails />}</div>

      {/* Main Content */}
      <div
        className="main-content d-flex flex-column justify-content-center align-items-center text-center vh-100"
        style={{ marginLeft: "100px" }}
      >
        {/* Map content has been removed */}
        {showMap && <GoogleMap />}
      </div>
    </div>
  );
};

export default Home;
