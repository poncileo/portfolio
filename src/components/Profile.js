import './Profile.css';
import ProfilePicture from './ProfilePicture';

function Profile() {
    return (
        <div className='Profile'>
            <ProfilePicture />
            {/* <hr className='separator'></hr> */}
            {/*<div className='name'>Leonardo Ponciano</div>
            <div className='other-info'>poncileo@gmail.com</div>
            <div className='other-info'>+55 11 98394-8270</div> */}
        </div>
    )
}

export default Profile;