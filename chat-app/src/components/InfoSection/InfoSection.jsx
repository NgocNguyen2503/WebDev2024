import React, { useState } from 'react';
import './InfoSection.css';

const InfoSection = () => {
  const [showChatInfo, setShowChatInfo] = useState(false);
  const [showChatSettings, setShowChatSettings] = useState(false);
  const [showMembers, setShowMembers] = useState(false);
  const [showFiles, setShowFiles] = useState(false); // State for File options

  const toggleChatInfo = () => {
    setShowChatInfo(!showChatInfo);
  };

  const toggleChatSettings = () => {
    setShowChatSettings(!showChatSettings);
  };

  const toggleMembers = () => {
    setShowMembers(!showMembers);
  };

  const toggleFiles = () => {
    setShowFiles(!showFiles);
  };

  return (
    <div className="info-section">
      {/* Avatar và tên người dùng */}
      <div className="profile">
        <div className="avatar-container">
          <img src="/nghia_ava.png" alt="Nghia Avatar" className="avatar" />
        </div>
        <h3>Nhóm Web 2024</h3>
        <p className="status">Đang hoạt động</p>
      </div>

      {/* Nút chuông và tìm kiếm */}
      <div className="action-buttons">
        <div className="action-btn">
          <img src="/bell.png" alt="Bell Icon" />
          <p>Bật lại</p>
        </div>
        <div className="action-btn">
          <img src="/search.png" alt="Search Icon" />
          <p>Tìm kiếm</p>
        </div>
      </div>

      {/* Các tùy chọn */}
      <ul className="options">
        <li onClick={toggleChatInfo}>
          Thông tin về đoạn chat
          <span className="arrow">{showChatInfo ? '▲' : '▼'}</span>
        </li>
        {showChatInfo && (
          <ul className="sub-options">
            <li>
              <img src="/pin.png" alt="Pin Icon" className="icon" />
              Xem tin nhắn đã ghim
            </li>
          </ul>
        )}

        <li onClick={toggleChatSettings}>
          Tùy chỉnh đoạn chat
          <span className="arrow">{showChatSettings ? '▲' : '▼'}</span>
        </li>
        {showChatSettings && (
          <ul className="sub-options">
            <li>
              <img src="/pencil.png" alt="Edit Icon" className="icon" />
              Đổi tên đoạn chat
            </li>
            <li>
              <img src="/image_icon.png" alt="Photo Icon" className="icon" />
              Thay đổi ảnh
            </li>
            <li>
              <img src="/chude.png" alt="Theme Icon" className="icon" />
              Đổi chủ đề
            </li>
            <li>
              <img src="/emotion.png" alt="Emoji Icon" className="icon" />
              Thay đổi biểu tượng cảm xúc
            </li>
            <li>
              <img src="/nickname.png" alt="Nickname Icon" className="icon" />
              Chỉnh sửa biệt danh
            </li>
          </ul>
        )}

        {/* Thành viên trong đoạn chat */}
        <li onClick={toggleMembers}>
          Thành viên trong đoạn chat
          <span className="arrow">{showMembers ? '▲' : '▼'}</span>
        </li>
        {showMembers && (
          <ul className="members">
            <li className="member-item">
              <img src="/duy_ava.png" alt="Dang Duy" className="member-avatar" />
              <div>
                <p>Đăng Duy</p>
                <span>Do Nguyễn Quang Ngọc thêm</span>
              </div>
              <div className="member-options">...</div>
            </li>
            <li className="member-item">
              <img src="/nghia_ava.png" alt="Nghia Nguyen" className="member-avatar" />
              <div>
                <p>Nghia Nguyen</p>
                <span>Do Nguyễn Quang Ngọc thêm</span>
              </div>
              <div className="member-options">...</div>
            </li>
            <li className="member-item">
              <img src="/duc_ava.png" alt="Nguyen Minh Duc" className="member-avatar" />
              <div>
                <p>Nguyễn Minh Đức</p>
                <span>Do Nguyễn Quang Ngọc thêm</span>
              </div>
              <div className="member-options">...</div>
            </li>
            <li className="member-item">
              <img src="/ngoc_ava.png" alt="Nguyen Quang Ngoc" className="member-avatar" />
              <div>
                <p>Nguyễn Quang Ngọc</p>
                <div className='admin'>Người tạo nhóm</div>
              </div>
              <div className="member-options">...</div>
            </li>
            <li className="member-item">
              <img src="/phương_ava.png" alt="Phuong Pham Duc" className="member-avatar" />
              <div>
                <p>Phương Phạm Đức</p>
                <div>Do Nguyễn Quang Ngọc thêm</div>
              </div>
              <div className="member-options">...</div>
            </li>
            <li className="member-item">
              <img src="/add_member.png" alt="Add User Icon" className="member-avatar" />
              <div>
                <div className='add'>Thêm người</div>
              </div>
            </li>
          </ul>
        )}

        {/* File phương tiện, file và liên kết */}
        <li onClick={toggleFiles}>
          File phương tiện, file và liên kết
          <span className="arrow">{showFiles ? '▲' : '▼'}</span>
        </li>
        {showFiles && (
          <ul className="sub-options">
            <li>
              <img src="/file1.png" alt="Media Icon" className="icon" />
              File phương tiện
            </li>
            <li>
              <img src="/file.png" alt="File Icon" className="icon" />
              File
            </li>
            <li>
              <img src="/link.png" alt="Link Icon" className="icon" />
              Liên kết
            </li>
          </ul>
        )}

<li className="options-item">
  Rời nhóm
</li>


        
      </ul>
    </div>
  );
};

export default InfoSection;
