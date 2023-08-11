import React from "react";
import { useNavigate } from "react-router-dom";
import {
  IconArrowChevron,
  IconDocument,
  IconLogout,
  IconPassword,
  IconSecurity,
  IconSettings,
  IconUser,
} from "./icon.component";

const ProfileAllButtonsComponents = () => {
  const navigate = useNavigate();

  return (
    <div className="profile-all-buttons">
      <div className="button-list">
        <div className="item" onClick={() => navigate("/personal-data")}>
          <div className="button">
            <div className="icon">
              <IconUser />
            </div>
            <div className="name">Personal Data</div>
          </div>

          <div className="arrow-icon">
            <IconArrowChevron />
          </div>
        </div>

        <div className="item" onClick={() => navigate("/")}>
          <div className="button">
            <div className="icon">
              <IconSettings />
            </div>
            <div className="name">Settings</div>
          </div>

          <div className="arrow-icon">
            <IconArrowChevron />
          </div>
        </div>

        <div className="item" onClick={() => navigate("/")}>
          <div className="button">
            <div className="icon">
              <IconPassword />
            </div>
            <div className="name">Change Password</div>
          </div>

          <div className="arrow-icon">
            <IconArrowChevron />
          </div>
        </div>

        <div className="item" onClick={() => navigate("/")}>
          <div className="button">
            <div className="icon">
              <IconSecurity />
            </div>
            <div className="name">Privacy Policy</div>
          </div>

          <div className="arrow-icon">
            <IconArrowChevron />
          </div>
        </div>

        <div className="item" onClick={() => navigate("/")}>
          <div className="button">
            <div className="icon">
              <IconDocument />
            </div>
            <div className="name">Terms and Cunductions</div>
          </div>

          <div className="arrow-icon">
            <IconArrowChevron />
          </div>
        </div>

        <div className="item" onClick={() => navigate("/")}>
          <div className="button">
            <div className="icon">
              <IconLogout />
            </div>
            <div className="name">Logout</div>
          </div>

          <div className="arrow-icon">
            <IconArrowChevron />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAllButtonsComponents;
