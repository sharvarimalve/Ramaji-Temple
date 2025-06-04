import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Welcome = () => {
  return (
    <div className="container mt-5 welcome-section">
      <div className="row align-items-center">
        {/* Image Column */}
        <div className="col-md-6 text-center mb-4 mb-md-0 welcome-image img ">
          <img
            src="welcome.jpg"
            alt="Welcome"
            className=" welcomeimg"
            // style={{ maxHeight: "400px" }}
          />
        </div>

        {/* Text Column */}
        <div className="col-md-6">
          <div className="text-center text-md-start">
            <h1 className="mb-3 text-center pb-5 heading">Welcome to Temple</h1>
            <p className="text-center maintext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
              esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p  className="text-center maintext">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt Lorem ipsum dolor 
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velimollit anim id est laborum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
