import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext';
import DiscordImage from '../../Images/Discord.png';
import './Discord.css'
const Discord = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`Discord ${theme === 'Dark' ? 'Discord-Dark' : 'Discord-Light'}`} >

            <img src={DiscordImage} className='DiscordImage' alt="Email" ></img>
            <p>Tournier206#0567</p>
        </div>
    )
}

export default Discord
