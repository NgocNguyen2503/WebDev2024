import React, { useState } from 'react'; 
import './InfoSection.css';

const InfoSection = () => {
  const [showChatInfo, setShowChatInfo] = useState(false);
  const [showChatSettings, setShowChatSettings] = useState(false);
  const [showMembers, setShowMembers] = useState(false);
  const [showFiles, setShowFiles] = useState(false); 
  const [activeSection, setActiveSection] = useState(null);
  const [isPinnedMessageVisible, setIsPinnedMessageVisible] = useState(false); 
  const [popupType, setPopupType] = useState(''); 

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const togglePinnedMessageModal = () => {
    setIsPinnedMessageVisible(!isPinnedMessageVisible); 
  };

  const openPopup = (type) => {
    setPopupType(type); 
  };

  const closePopup = () => {
    setPopupType(''); 
  };

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
      {}
      <div className="profile">
        <div className="avatar-container">
          <img src="/nghia_ava.png" alt="Nghia Avatar" className="avatar" />
        </div>
        <h3>Nhóm Web 2024</h3>
        <p className="status">Đang hoạt động</p>
      </div>

      {}
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

      {}
      <ul className="options">
        <li onClick={toggleChatInfo}>
          Thông tin về đoạn chat
          <span className="arrow">{showChatInfo ? '▲' : '▼'}</span>
        </li>
        {showChatInfo && (
          <ul className="sub-options">
            <li onClick={togglePinnedMessageModal}>
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
            <li onClick={() => openPopup('rename')}>
              <img src="/pencil.png" alt="Edit Icon" className="icon" />
              Đổi tên đoạn chat
            </li>
            <li onClick={() => openPopup('changeImage')}>
              <img src="/image_icon.png" alt="Photo Icon" className="icon" />
              Thay đổi ảnh
            </li>
            <li onClick={() => openPopup('changeTheme')}>
              <img src="/chude.png" alt="Theme Icon" className="icon" />
              Đổi chủ đề
            </li>
            <li onClick={() => openPopup('changeEmoji')}>
              <img src="/emotion.png" alt="Emoji Icon" className="icon" />
              Thay đổi biểu tượng cảm xúc
            </li>
            <li onClick={() => openPopup('editNickname')}>
              <img src="/nickname.png" alt="Nickname Icon" className="icon" />
              Chỉnh sửa biệt danh
            </li>
          </ul>
        )}

        {}
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

        {}
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

        {}
        {isPinnedMessageVisible && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h2>Tin nhắn đã ghim</h2>
                <button className="close-btn" onClick={togglePinnedMessageModal}>×</button>
              </div>
              <div className="modal-body">
                <img src="/pin_icon.png" alt="Pin Icon" className="modal-icon" />
                <p>Chưa ghim tin nhắn nào</p>
                <span>Tin nhắn đã ghim trong đoạn chat này sẽ hiển thị ở đây</span>
              </div>
            </div>
          </div>
        )}

        {}
        {popupType && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h2>{getPopupTitle(popupType)}</h2>
                <button className="close-btn" onClick={closePopup}>×</button>
              </div>
              <div className="modal-body">
                {renderPopupContent(popupType)}
              </div>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
};

const getPopupTitle = (type) => {
  switch (type) {
    case 'rename':
      return 'Đổi tên đoạn chat';
    case 'changeImage':
      return 'Thay đổi ảnh';
    case 'changeTheme':
      return 'Đổi chủ đề';
    case 'changeEmoji':
      return 'Thay đổi biểu tượng cảm xúc';
    case 'editNickname':
      return 'Chỉnh sửa biệt danh';
    default:
      return '';
  }
};

const renderPopupContent = (type) => {
  switch (type) {
    case 'rename':
      return <input type="text" placeholder="Nhập tên mới cho đoạn chat" />;
    case 'changeImage':
      return <input type="file" />;
    case 'changeTheme':
      return <img src="/cde.png" alt="Theme Image" style={{ width: '100%' }} />;
    case 'changeEmoji':
      return <img src="/emoji_a.png" alt="Theme Image" style={{ width: '100%' }} />;
              
    case 'editNickname':
      return <input type="text" placeholder="Nhập biệt danh mới" />;
    default:
      return null;
  }
};

export default InfoSection;
