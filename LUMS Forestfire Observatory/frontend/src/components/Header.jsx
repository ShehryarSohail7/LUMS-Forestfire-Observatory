import React from "react";

function Header() {
  const handleSignOut = () => {
    // Perform sign-out logic here, such as clearing user session or token
    // Redirect the user to the login screen
    window.location.href = "/login";
  };

  return (
    <header style={headerStyle}>
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <h1 style={logoStyle}>
            <img
              src="https://lums.edu.pk/sites/default/files/inline-images/LUMS%20Logo-white.png"
              alt="LUMS Logo"
              style={logoImageStyle}
            />
            <span style={{ marginLeft: "10px" }}>Forest Fire Observatory</span>
          </h1>
        </div>
        <div>
          <nav>
            <ul style={navListStyle}>
              <li style={navItemStyle}>
                <a href="https://www.lums.edu.pk/" style={navLinkStyle}>
                  About Us
                </a>
              </li>

              <li style={navItemStyle}>
                <a href="https://lums.edu.pk/contact-us" style={navLinkStyle}>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

const headerStyle = {
  padding: "12px 0",
  backgroundColor: "#2C3E50", // Dark blue
  color: "#FFFFFF", // White text
  height: "85px",
  position: "sticky", // Make the header sticky
  top: "0", // Stick it to the top of the viewport
  zIndex: "1000", // Set a high z-index to ensure it appears above other content
};

const logoStyle = {
  fontSize: "24px",
  margin: "0",
  display: "flex",
  alignItems: "center",
};

const logoImageStyle = {
  width: "auto", // Let the browser calculate the width automatically based on the height to maintain aspect ratio
  height: "70px",
  marginRight: "10px",
};

const navListStyle = {
  listStyle: "none",
  margin: "0",
  padding: "0",
};

const navItemStyle = {
  display: "inline",
  margin: "0 10px",
};

const navLinkStyle = {
  color: "#FFFFFF", // White text
  textDecoration: "none",
  cursor: "pointer", // Add cursor pointer for better UX
};

export default Header;
