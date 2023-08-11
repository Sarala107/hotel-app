import React from "react";
import PageTitleComponent from "../components/page-title.component";
import ProfileAllButtonsComponents from "../components/profile-all-buttons.components";
import UserProfileComponent from "../components/user-profile.component";

const ProfilePageComponent = () => {
  return (
    <div className="profile-page">
      <PageTitleComponent title="Profile" />

      <section>
        <div className="wrapper">
          <UserProfileComponent />

          <ProfileAllButtonsComponents />
        </div>
      </section>
    </div>
  );
};

export default ProfilePageComponent;
