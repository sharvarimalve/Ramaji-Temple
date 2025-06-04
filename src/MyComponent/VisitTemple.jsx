import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const VisitTemple = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image Column */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src="contactus.jpg"
            alt="Visit Temple"
            className="welcomeimg"
            style={{ maxHeight: "500px", width: "90%", objectFit: "cover" }}
          />
        </div>

        {/* Text Column */}
        <div className="col-md-6">
          <div className=" text-md-start maintext">
            <h1 className="mb-5 text-center heading">Visit The Temple</h1>
            <p className="text-center">Temple Open Everyday</p>
            <p className=" text-center">
              From 8:00 AM <br/>
              Till 9:00 PM
            </p>
            <p className=" text-center">
              At 23/2, Sriniwasa Ayer Road, Nagpur <br />
              Maharashtra - 410101
            </p>
            <button className="btn button mt-5">Get Location</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitTemple;
