import React, { useState } from 'react'; // Thêm useState từ React
import './SideNav.css'; // Đảm bảo file CSS nằm cùng thư mục
import nghia from "../../assets/nghia_img.jpg";
import ProfileSettings from '../profile_setting/ProfileSettings'; // Giả sử bạn có ProfileSettings component

const SideNav = () => {
  const [showProfileSettings, setShowProfileSettings] = useState(false);

  const handleProfileClick = () => {
    setShowProfileSettings(true); // Hiển thị giao diện ProfileSettings
  };

  const handleCloseSettings = () => {
    setShowProfileSettings(false); // Đóng giao diện ProfileSettings
  };

  return (
    <div>
      <nav className="side-nav-bar">
        <ul>
          <li>
            <img
              src={nghia}
              alt="Profile 1"
              className="profile-icon"
              onClick={handleProfileClick} // Thêm sự kiện khi click vào profile icon
            />
          </li>
          <li className="divider"></li>
        </ul>
      </nav>

      {showProfileSettings && (
        <ProfileSettings onClose={handleCloseSettings} /> // Hiển thị ProfileSettings khi click vào profile
      )}
    </div>
  );
};

export default SideNav;
