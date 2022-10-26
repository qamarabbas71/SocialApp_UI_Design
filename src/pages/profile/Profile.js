import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";

const Profile = () => {
  return (
    <div>
    <Topbar/>
   <div className="profile">
     <Sidebar/>
     <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
                <img src="/assets/person/9.jpg" className="profileCoverimg" alt=''/>
                <img src="/assets/person/1.jpg" className="profileUserimg" alt=''/>
            </div>
            <div className="profileInfo">
                <h4 className='profileInfoName'>Qamar Abbas</h4>
                <span className="profileInfoDesc">Hello My Friends!</span>
            </div>
        </div>
        <div className="profileRightBottom">
            <Feed/>
            <Rightbar profile/>
        </div>
     
     </div>
   </div>
</div>
  )
}

export default Profile