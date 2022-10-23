import './SocialNetwork.css';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

function SocialNetwork(props) {

    const linkedinUrl = "https://www.linkedin.com/in/leonardo-ponciano-93ba30177/";
    const instagramUrl = "https://www.instagram.com/leo_ponciano/";
    const githubUrl = "https://github.com/poncileo";

    return (
        <div className='social'>
            <a href={githubUrl} target="_blank" rel="noreferrer" >
                <FaGithub size={25} style={{color: 'var(--blue)'}} />
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer">
                <FaInstagram size={25} style={{color: 'var(--blue)'}} />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer">
                <FaLinkedin size={25} style={{color: 'var(--blue)'}} />
            </a>
        </div>
    )
}

export default SocialNetwork;