import React, { useState } from 'react';
import './Project.css'; // Asegúrate de tener este archivo CSS
import GitHubIcon from '../../../Download/Images/GitHubIconBlack.png';

const Project = ({ title, Description, techStack, githubUrl, backgroundImage, githubIcon }) => {
    const [showMessage, setShowMessage] = useState(false);

    const handleClick = () => {
        setShowMessage(!showMessage);
    };

    return (
        <div className='EasyFit_Container' onClick={handleClick}>
            <div className='EasyFit_Info'>
                <h3>{title}</h3>
                <p>{Description.slice(0, 35)}...</p>
                <div className='EasyFit_TechnologiesContainer'>
                    {techStack.map((tech, index) => (
                        <div key={index} className='EasyFit_Technologies'>
                            <p>{tech}</p>
                        </div>
                    ))}
                </div>
            </div>
            <img src={backgroundImage} className='EasyFit_Fondo' alt='Fondo' />
            {showMessage && (
                <div className='message-overlay'>
                    <div className='message-content'>
                        <button onClick={handleClick} className='Button_EasyFit'>X</button>
                        <h3>{title}</h3>
                        <p className='description'>{Description}</p>
                        <div className='overlay_TechnologiesContainer'>
                            {techStack.map((tech, index) => (
                                <div key={index} className='overlay_Technologies'>
                                    <p>{tech}</p>
                                </div>
                            ))}
                        </div>
                        <div className='Github_EasyFit'>
                            <img src={GitHubIcon} alt='GitHub Icon' />
                            <p>Git Hub</p>
                        </div>
                        <a href={githubUrl} className='Link_EasyFit'>{githubUrl}</a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Project;
