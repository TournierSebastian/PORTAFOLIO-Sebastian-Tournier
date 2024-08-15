import React, { useState } from 'react';
import './EasyFit.css'; // Asegúrate de tener este archivo CSS
import Fondo from './../../../Download/Images/easyfit.png';
import GitHubIcon from '../../../Download/Images/GitHubIconBlack.png';

const EasyFit = () => {
    const [showMessage, setShowMessage] = useState(false);

    const handleClick = () => {
        setShowMessage(!showMessage);
    };

    const description = `En este proyecto, desarrollé una página de nutrición relacionada con las calorías, donde implementé un sistema CRUD con funciones diferenciadas para usuarios y administradores. Utilicé tecnologías como React, HTML, Firebase, CSS y Bootstrap. Trabajé de manera colaborativa con un equipo bien organizado de dos personas, distribuyendo tareas para llevar a cabo el proyecto de manera efectiva`;

    return (
        <div className='project-container' onClick={handleClick}>
            <div className='project-info'>
                <h3>EasyFit</h3>
                <p>{description.slice(0, 35)}...</p>
                <div className='tech-stack'>
                    <div className='tech-item'>
                        <p>React</p>
                    </div>
                    <div className='tech-item'>
                        <p>FireBase</p>
                    </div>
                    <div className='tech-item'>
                        <p>Bootstrap</p>
                    </div>
                </div>
            </div>
            <img src={Fondo} className='project-background' alt='Background' />
            {showMessage && (
                <div className='overlay'>
                    <div className='overlay-content'>
                        <button onClick={handleClick} className='close-button'>X</button>
                        <h3>EasyFit</h3>
                        <p className='full-description'>{description}</p>
                        <div className='overlay-tech-stack'>
                            <div className='overlay-tech-item'>
                                <p>React</p>
                            </div>
                            <div className='overlay-tech-item'>
                                <p>FireBase</p>
                            </div>
                            <div className='overlay-tech-item'>
                                <p>Bootstrap</p>
                            </div>
                        </div>
                        <div className='github-info'>
                            <img src={GitHubIcon} alt='GitHub Icon' />
                            <p>Git Hub</p>
                        </div>
                        <a href='https://github.com/NekiroPLZ/easyfitv2' className='github-link'>https://github.com/NekiroPLZ/easyfitv2</a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EasyFit;
