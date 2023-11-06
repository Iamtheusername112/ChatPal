import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import "./Logo.css"; // Import the CSS file

const Logo = () => {
  return (
    <div className="logo-container">
      <Link to={"/"}>
        <img
          src="openai.png"
          alt="openai"
          className="logo-img image-inverted"
        />
      </Link>
      <Typography className="logo-text">
        <span>CHAT</span>-PAL
      </Typography>
    </div>
  );
};

export default Logo;
