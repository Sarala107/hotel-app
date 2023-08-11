import React from "react";

const UserProfileComponent = () => {
  const image =
    "https://images.pexels.com/photos/5333102/pexels-photo-5333102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <div className="user-profile">
      <div className="user-image">
        <img src={image} alt="" />
      </div>

      <div className="user-details">
        <div className="user-name">Hello Worlds</div>
        <div className="user-number">9876543210</div>
      </div>
    </div>
  );
};

export default UserProfileComponent;
