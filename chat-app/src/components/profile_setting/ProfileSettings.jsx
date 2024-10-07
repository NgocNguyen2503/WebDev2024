import React from 'react';
import './ProfileSettings.css';
import accountIcon from '../../assets/profile_icon.png'; // Biểu tượng tài khoản
import activeStatusIcon from '../../assets/active_status_icon.png'; // Biểu tượng trạng thái hoạt động
import notificationSoundIcon from '../../assets/notification_sound_icon.png'; // Biểu tượng âm thanh thông báo
import doNotDisturbIcon from '../../assets/do_not_disturb_icon.png'; // Biểu tượng không làm phiền
import darkModeIcon from '../../assets/dark_mode_icon.png'; // Biểu tượng chế độ tối
import logOut from '../../assets/logout.png'

const ProfileSettings = ({ onClose }) => {
  return (
    <div className="profile-settings-overlay">
      <div className="profile-settings">
        <button className="close-button" onClick={onClose}>X</button>
        <h2 className="options-title">Tùy chọn</h2> {/* Tiêu đề */}

        {/* Thông tin tài khoản */}
        <div className="account-section">
          <img src={accountIcon} alt="Account" className="section-icon" />
          <div>
            <strong>Phương Phạm Đức </strong>
            <span>Xem trang cá nhân của bạn</span>
          </div>
        </div>

        {/* Trạng thái hoạt động */}
        <div className="section">
          <div className="icon-text-wrapper">
            <img src={activeStatusIcon} alt="Active Status" className="section-icon" />
            <h3>Trạng thái hoạt động: ĐANG BẬT</h3>
          </div>
        </div>

        {/* Thông báo */}
        <div className="section">
          <h3>Thông báo</h3>
          <ul>
            <li>
              <img src={notificationSoundIcon} alt="Notification Sound" className="section-icon" />
              <span>Âm thanh thông báo</span>
              <input type="checkbox" />
            </li>
            <li>
              <img src={doNotDisturbIcon} alt="Do Not Disturb" className="section-icon" />
              <span>Không làm phiền</span>
              <input type="checkbox" />
            </li>
          </ul>
        </div>

        {/* Chế độ tối */}
        <div className="section">
          <div className="icon-text-wrapper">
            <img src={darkModeIcon} alt="Dark Mode" className="section-icon" />
            <h3 className="centered-text">Chế độ tối</h3> {/* Chỉ chữ "Chế độ tối" đứng cạnh biểu tượng */}
          </div>
          <ul>
            <li>
              <span className="centered-text">Đang tắt</span>
              <input type="radio" name="theme" />
            </li>
            <li>
              <span className="centered-text">Đang bật</span>
              <input type="radio" name="theme" />
            </li>
            <li>
              <span className="centered-text">Tự động</span>
              <input type="radio" name="theme" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
