import './Profile.css';
import profilePicture from '../images/profile.jpg';

function ProfilePicture() {
    return (
        <img className='picture' src={profilePicture} alt="profile" />
    )
}

export default ProfilePicture;