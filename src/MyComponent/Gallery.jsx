import React from "react";


const Gallery = () => {
  return (
    <div>
      <h1 className="text-center pb-5 pt-5 heading">Temple Gallery</h1>
       <div className="gallery-container">
  <div className="gallery-row">
    <img src="marquee7.jpg" alt="Temple 1" width="445"  height="230"/>
    <img src="marquee20.jpg" alt="Temple 2" className="img-fluid" />
    <img src="marquee6.jpg" alt="Temple 3" className="img-fluid" />
    
    <img src="marquee10.jpg" alt="Temple 4"   width="445"  height="256" style={{ marginTop: '-55PX' }}/>
    <img src="marquee14.jpg" alt="Temple 5"  width="500"  height="202" />
    <img src="marquee4.jpg" alt="Temple 6"  width="179"  height="202"/>
    <img src="marquee16.jpg" alt="Temple 7" width="194"  height="202" />
  </div>
</div>

      <div className="text-center pt-5">
        <h3 className="text-center">
          Browse through our extensive gallery of high quality images of Temple
        </h3>
        <button className="text-center mt-5 button">See All</button>
      </div>

    </div>
  
  );
};

export default Gallery;
