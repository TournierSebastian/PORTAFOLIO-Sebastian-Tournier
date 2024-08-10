import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import './Currículum.css';
import CurrículumImage from '../../Download/Images/Curriculum.png';
import CurriculumPDF from '../../Download/Cv/SebastianTournier_Curriculum.pdf';
import CurriculumPDFEnglish from '../../Download/Cv/SebastianTournier_Curriculum_English.pdf';
import DownloadIcon from '../../Download/Images/DownloadIcon.png'
import { LeagueContext } from '../../Context/LeagueContext';

const Currículum = () => {
    const { theme } = useContext(ThemeContext);
    const { League } = useContext(LeagueContext);


    const content = {
        es: {
            curriculum: "Mi Curriculum"
        },
        en: {
            curriculum: "My Curriculum"
        }
    };
    const lang = League === 'EN' ? 'en' : 'es';

    return (
        <a
            href={League === 'EN' ? CurriculumPDFEnglish : CurriculumPDF}
            download="SebastianTournier_Curriculum.pdf"
            className={`Currículum ${theme === 'Dark' ? 'Currículum-Dark' : 'Currículum-Light'} Card-Width`}
        >
            <p>{content[lang].curriculum}</p>
            <img src={CurrículumImage} alt="Currículum" className='CurrículumImage' />

            <div>
                <img src={DownloadIcon} alt="Currículum" className='DownloadIcon' />
            </div>
        </a>
    );
};

export default Currículum;
