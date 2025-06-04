import React from 'react';

function Subscribesection() {
  return (
    <div 
      className="container-fluid subscribe-bg py-4"
      style={{ backgroundColor: '#AF3100', color: '#fff' }}
    >
      <div className="container">
        <div className="d-flex">
          
          <div>
            <p className="mb-0 h5 pt-2 maintext">SUBSCRIBE TO US</p>
            </div>
            <div className="ms-3">
            <input 
              type="email"  
              className="form-control"
            /> 
          </div>

          <div>
            <p className="mb-0 h5 join-text pt-2 maintext">JOIN WITH US</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Subscribesection;
