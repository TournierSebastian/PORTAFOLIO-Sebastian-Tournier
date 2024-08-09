import React from 'react';
import './Location.css';

const Location = () => {
    return (
       
            <iframe
                className="Location-Width"
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.824763528944!2d-60.64120042455897!3d-32.95563567234228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab050cb0138d%3A0x1cf283e00ec17186!2sAv.%20San%20Mart%C3%ADn%201519%2C%20S2000%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1723209695904!5m2!1ses-419!2sar"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
      
    );
};

export default Location;
