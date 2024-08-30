import React from 'react';
import './Location.css';

const Location = () => {
    return (
       
        <iframe
            className="Location-Width"
            title="Google Maps - Rosario"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d107134.54602190807!2d-60.696639!3d-32.952209!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b6539335d7d75b%3A0xec4086e90258a557!2sRosario%2C%20Santa%20Fe%20Province!5e0!3m2!1sen!2sar!4v1725028810341!5m2!1sen!2sar"            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      
    );
};

export default Location;
