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
        <div className='EasyFit_Container' onClick={handleClick}>
            <div className='EasyFit_Info'>
                <h3>EasyFit</h3>
                <p>{description.slice(0, 35)}...</p>
                <div className='EasyFit_TechnologiesContainer'>
                    <div className='EasyFit_Technologies'>
                        <p>React</p>
                    </div>
                    <div className='EasyFit_Technologies'>
                        <p>FireBase</p>
                    </div>
                    <div className='EasyFit_Technologies'>
                        <p>Bootstrap</p>
                    </div>
                </div>
            </div>
            <img src={Fondo} className='EasyFit_Fondo' alt='Fondo' />
            {showMessage && (
                <div className='message-overlay'>
                    <div className='message-content'>
                        <button onClick={handleClick} className='Button_EasyFit'>X</button>
                        <h3>EasyFit</h3>
                        <p className='description'>{description}</p>
                        <div className='overlay_TechnologiesContainer'>
                            <div className='overlay_Technologies'>
                                <p>React</p>
                            </div>
                            <div className='overlay_Technologies'>
                                <p>FireBase</p>
                            </div>
                            <div className='overlay_Technologies'>
                                <p>Bootstrap</p>
                            </div>
                        </div>
                        <div className='Github_EasyFit'>
                            <img src={GitHubIcon} alt='GitHub Icon' />
                            <p>Git Hub</p>
                        </div>
                        <a href='https://github.com/NekiroPLZ/easyfitv2' className='Link_EasyFit'>https://github.com/NekiroPLZ/easyfitv2</a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EasyFit;
