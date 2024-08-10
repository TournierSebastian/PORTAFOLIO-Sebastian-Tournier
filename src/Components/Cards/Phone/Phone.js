import React, { useContext } from 'react';
import './Phone.css';
import { ThemeContext } from '../../Context/ThemeContext';
import iconUrl from '../../Download/Images/IconUrl.png';
import PhoneImage from '../../Download/Images/Phone.png';

const Phone = () => {
    const { theme } = useContext(ThemeContext);

    // Mensaje predefinido
    const message = "Hola Sebastián, ¿Podemos conversar?";;

    return (
        <a
            href={`https://wa.me/3413442728?text=${encodeURIComponent(message)}`}
            className={`Phone ${theme === 'Dark' ? 'Phone-Dark' : 'Phone-Light'} Card-Width`}
            target="_blank" 
            rel="noopener noreferrer"
        >
            <div>
                <img src={iconUrl} className='iconUrl' alt="Icon" />
            </div>
            <img src={PhoneImage} className='PhoneImage' alt="Phone" />
        </a>
    );
}

export default Phone;
