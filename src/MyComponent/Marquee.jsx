import React from "react";

const ImageMarquee = () => {
  return (
    <marquee
      behavior="scroll"
      direction="left"
      scrollAmount="6"
      loop="-1"
      style={{ width: "100%", display: "flex", alignItems: "center", gap: "20px" }}
    >
      <img
        src="marquee19.jpg"
        alt="img1"
       
      />
      <img
        src="marquee2.jpg"
        alt="img2"
       
      />
      <img
        src="marquee3.jpg"
        alt="img3"
        
      />
      <img
        src="marquee4.jpg"
        alt="img4"
       
      />
      <img
        src="marquee5.jpg"
        alt="img5"
        
      />
      <img
        src="marquee6.jpg"
        alt="img5"
        
      />
      <img
        src="marquee7.jpg"
        alt="img5"
       
      />
      <img
        src="marquee8.jpg"
        alt="img5"
        
      />
      <img
        src="marquee9.jpg"
        alt="img5"
       
      />
      <img
        src="marquee10.jpg"
        alt="img5"
        
      />
      <img
        src="marquee11.jpg"
        alt="img5"

      />
      <img
        src="marquee12.jpg"
        alt="img5"
       
      />
      <img
        src="marquee13.jpg"
        alt="img5"
        
      />
      <img
        src="marquee14.jpg"
        alt="img5"
        
      />
    </marquee>

  );
};

export default ImageMarquee;
