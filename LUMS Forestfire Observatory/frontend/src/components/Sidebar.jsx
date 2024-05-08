import React, { useState } from "react";

const Sidebar = ({ handleOptionClick }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const optionStyle = {
    cursor: "pointer",
    padding: "8px",
    marginBottom: "50px", // Increased margin between options
    borderRadius: "3px",
    backgroundColor: "#465a7f", // Lighter shade of blue to match the header
    color: "#FFFFFF", // White text for better visibility
    transition: "background-color 0.3s ease",
    listStyle: "none", // Remove default list styling
    overflow: "hidden",
  };

  const handleMouseOver = (event) => {
    event.target.style.backgroundColor = "#3d4d67"; // Slightly darker shade on hover
  };

  const handleMouseLeave = (event) => {
    event.target.style.backgroundColor = "#465a7f"; // Restore to original color on mouse leave
  };

  const options = [
    { label: "Home", value: "home" },
    { label: "Previous Records", value: "records" },
    { label: "Model Details", value: "prediction" },
    { label: "Sign Out", value: "signOut" },
  ];

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="side-panel"
      style={{
        position: "sticky", // Change to sticky positioning
        top: "20px", // Add space from the top
        backgroundColor: "#465a7f",
        width: isExpanded ? "200px" : "50px",
        height: "100vh", // Set height to 100vh for maximum height of the screen
        maxHeight: "100%", // Ensure it doesn't exceed the viewport height
        padding: "20px",
        transition: "width 0.3s ease",
        display: "flex", // Make the sidebar flex container
        flexDirection: "column", // Arrange items vertically
        justifyContent: "space-between", // Align items with space between them
      }}
    >
      <ul style={{ padding: 0, margin: 0 }}>
        {options.map((option, index) => (
          <li
            key={option.value}
            style={{
              ...optionStyle,
              display: isExpanded ? "block" : "none", // Hide options when sidebar is collapsed
              marginTop: index === 0 ? "50px" : "0", // Set margin-top for the first option
            }}
            onClick={() => handleOptionClick(option.value)}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            {option.label}
          </li>
        ))}
      </ul>
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
          marginRight: "10px",
        }}
      >
        {/* <button
          onClick={toggleSidebar}
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            outline: "none",
            zIndex: 1, // Ensure the button stays above the sidebar content
            padding: "10px",
            borderRadius: "50%",
            color: "#465a7f",
            fontSize: "16px",
          }}
        >
          {isExpanded ? "<" : ">"}
        </button> */}
      </div>
    </div>
  );
};

export default Sidebar;
