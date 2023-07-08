import ChangeProfilePicture from "./ChangeProfilePicture"
import EditProfile from "./EditProfile"
import DeleteAccount from "./DeleteAccount"
import UpdatePassword from "./UpdatePassword"

export default function Settings() {
    return (
        <div>
            <h1 className="mb-14 text-3xl font-medium text-richblack-5 ml-16 md:ml-0">Edit Profile</h1>
            {/* change profile picture */}
            <ChangeProfilePicture/>
            {/* edit profile */}
            <EditProfile/>
            {/* password */}
            {/* <UpdatePassword/> */}
            {/* delete account */}
            <DeleteAccount/>
        </div>
    )
}
