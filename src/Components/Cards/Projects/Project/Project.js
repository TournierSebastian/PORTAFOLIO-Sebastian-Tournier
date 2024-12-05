import React, { useContext, useState } from 'react';
import './Project.css'; // Asegúrate de tener este archivo CSS
import GitHubIcon from '../../../Download/Images/GitHubIconBlack.png';
import { ThemeContext } from '../../../Context/ThemeContext';

const Project = ({ title, Description, techStack, githubUrl, backgroundImage, documentationUrl, Pageweb }) => {
    const [showMessage, setShowMessage] = useState(false);
    const { theme } = useContext(ThemeContext);

    const handleClick = () => {
        setShowMessage(!showMessage);
    };

    return (
        <div className={`EasyFit_Container ${theme === 'Dark' ? 'EasyFit_Container-Dark' : 'EasyFit_Container-Light'}`} onClick={handleClick}>
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
                    <div className={`message-content ${theme === 'Dark' ? 'message-content-Dark' : 'message-content-Light'}`}>
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
                        <a href={githubUrl} target='_blank' className='Link_EasyFit'>{githubUrl}</a>



                        {Pageweb && (
                            <div className='Github_EasyFit'>
                                <div>
                                <p>Page WeB:</p>
                                <a href={Pageweb} className='Link_documentation' target='_blank' rel='noopener noreferrer'>{Pageweb}</a>
                                </div>
                            </div>
                        )}

                        {documentationUrl && (
                            <div className='Github_EasyFit'>
                                <div>
                                <p>Documentation</p>
                                <a href={documentationUrl} className='Link_documentation' target='_blank' rel='noopener noreferrer'>{documentationUrl}</a>
                                </div>
                            </div>
                        )}

                        
              
                    </div>
                </div>
            )}
        </div>
    );
};

export default Project;
