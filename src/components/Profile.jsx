import "./Profile.css";
import profilePic from "../assets/ProfilePic.jpg"
function Profile() {
    return(
        <div className="layout">
            <img src={profilePic} alt="profile" />
            <h1 className="name">Kaung Kaung</h1>
            <hr />
        </div>
    )

}
export default Profile;