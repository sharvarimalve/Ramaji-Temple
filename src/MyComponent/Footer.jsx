import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay">
        <div className="footer-content">
            <div className="footer-info">
            <p><b className='footerheading'>Visitors till today</b><br/><p className='footertext'>346749 </p></p>
            <p><b className='footerheading'>Visitors till this week</b><br /> <p className='footertext'>2355 </p></p>
            <address className='footertext'>
              Satyapan Group, Nagpur,<br />
              Maharashtra - 440001<br />
              India
            </address>
            <p className='footertext'>
  <i className="fa-solid fa-location-dot" style={{ color: '#ffffff' }}></i> +91 98765 98765
</p>
<p className='footertext'>
  <i className="fa-solid fa-phone" style={{ color: '#f7f7f8' }}></i> +91 98765 98765 | 
  <i className="fa-solid fa-envelope" style={{ color: '#ffffff' }}></i> zyw.alpha@yahoo.com
</p>
</div>

          <div className='footer-bottom footertext'>
            <p>© RS Infotech System private Limited| <a href="#">Privacy Policy</a> |   <a href="#">Terms & Conditions</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
