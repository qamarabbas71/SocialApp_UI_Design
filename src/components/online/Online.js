import React from 'react'
import "./online.css";

const Online = ({user}) => {
  return (
        <li className="rightbarFriends">
            <div className="rightbarProfileImgContainer">
            <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
            </div>
            <span className="reightbarUserNmae">{user.username}</span>
        </li>
  )
}

export default Online