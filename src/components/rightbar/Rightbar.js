import React from 'react'
import './rightbar.css';
import { Users } from '../../DummyData';
import Online from '../online/Online';

const Rightbar = ({profile}) => {

  const HomeRightBar = () =>{
    return(
      <>
          <div className="birthdayContainer">
              <img className='birthdayImg' src="/assets/post/2.jpg" alt="" />
              <span className="birthdayText">
                <b>Ahmad</b> and <b>2 others friends</b> have a birthday today
              </span>

          </div>
              <img src="/assets/post/8.png" alt="" className="rightbarAd" />
                  <h4 className="rightbarTitle">Online Friends</h4>
                  <ul className="rightbarFriendsList">
                    {Users.map(u=>(
                    <Online key={u.id} user={u}/>
                ))}
               </ul>
      </>
    
    )
  }

  const ProfileRightBar = () =>{
    return(
        <>
               <h4 className="rightbarTitle">User Information</h4>
               <div className="rightbarInfo">
                <div className="rightbarinfoItem">
                  <span className="rightbarInfoKey">City:</span>
                  <span className="rightbarInfoValue">Lahore</span>
                </div>
                <div className="rightbarinfoItem">
                  <span className="rightbarInfoKey">From:</span>
                  <span className="rightbarInfoValue">Lahore</span>
                </div>
                <div className="rightbarinfoItem">
                  <span className="rightbarInfoKey">Relationship:</span>
                  <span className="rightbarInfoValue">Single</span>
                </div>
               </div>

               <h4 className="rightbarTitle">User Friend</h4>
              <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                  <img src="/assets/person/2.jpg" alt="" className="rightbarFollowingImg" />
                  <span className="rightbarFollowingName">Usman</span>
                </div>
                <div className="rightbarFollowing">
                  <img src="/assets/person/3.jpg" alt="" className="rightbarFollowingImg" />
                  <span className="rightbarFollowingName">Allah Ditta</span>
                </div>
                <div className="rightbarFollowing">
                  <img src="/assets/person/4.jpg" alt="" className="rightbarFollowingImg" />
                  <span className="rightbarFollowingName">Hunain Hanif</span>
                </div>
                <div className="rightbarFollowing">
                  <img src="/assets/person/5.jpg" alt="" className="rightbarFollowingImg" />
                  <span className="rightbarFollowingName">Shahbaz</span>
                </div>
                <div className="rightbarFollowing">
                  <img src="/assets/person/6.jpg" alt="" className="rightbarFollowingImg" />
                  <span className="rightbarFollowingName">Afaq Ahmad</span>
                </div>
                <div className="rightbarFollowing">
                  <img src="/assets/person/7.jpg" alt="" className="rightbarFollowingImg" />
                  <span className="rightbarFollowingName">Sherry</span>
                </div>
              </div>
        </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWraper">
       {profile ? <ProfileRightBar/> : <HomeRightBar/>}
      </div>

    </div>
  )
}

export default Rightbar