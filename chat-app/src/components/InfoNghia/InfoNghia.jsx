import './infoNghia.css';
import { useState } from 'react';
import nghia_img from '../../assets/nghia_img.jpg'

const InfoNghia = () => {
  const [showChatInfo, setShowChatInfo] = useState(false);
  const [showChatCustom, setShowChatCustom] = useState(false);
  const [showFiles, setShowFiles] = useState(false);
  const [showBlock, setShowBlock] = useState(false);
  const [isPinnedMessageVisible, setIsPinnedMessageVisible] = useState(false);
  const [popupType, setPopupType] = useState('');

  const toggleChatInfo = () => {
    setShowChatInfo(!showChatInfo);
  }
  const toggleChatCustom = () => {
    setShowChatCustom(!showChatCustom);
  }

  const toggleFiles = () => {
    setShowFiles(!showFiles);
  }

  const toggleBlock = () => {
    setShowBlock(!showBlock);
  }

  const togglePinnedMessageModal = () => {
    setIsPinnedMessageVisible(!isPinnedMessageVisible);
  }

  const openPopup = (type) => {
    setPopupType(type);
  }

  const closePopup = () => {
    setPopupType('');
  };


  return (
    <div className="sidebar-person">

      <div className="sidebar__profile">
        <img
          src={nghia_img}
          alt="Profile"
          className="profile__image"
        />
        <p className="profile__name">Nghia Nguyen</p>
        <p className="status">Đang hoạt động</p>

        <div className="profile__actions">
          <div className="profile__action-button">
            <img src="/bell.png" alt="Bell Icon" />
            <p>Tắt thông báo</p>
          </div>

          <div className="profile__action-button">
            <img src="/search.png" alt="Search Icon" />
            <p>Tìm kiếm</p>
          </div>
        </div>
      </div>

      <div className="menu__section">
        <p className="menu__section-title" onClick={toggleChatInfo}>Thông tin về đoạn chat
          <span className="arrow">{showChatInfo ? '▲' : '▼'}</span>
        </p>
        {showChatInfo && (
          <div>
            <div className="menu__item" onClick={togglePinnedMessageModal}>
              <img src="/pin.png" alt="Pin Icon" className="icon" />
              Xem tin nhắn đã ghim
            </div>
          </div>
        )}
      </div>


      <div className="menu__section">
        <p className="menu__section-title" onClick={toggleChatCustom}>Tùy chỉnh đoạn chat
          <span className="arrow">{showChatCustom ? '▲' : '▼'}</span>
        </p>
        {showChatCustom && (
          <div>
            <div className="menu__item" onClick={() => openPopup('changeTheme')}>
              <img src="/chude.png" alt="Theme Icon" className="icon" /> Đổi chủ đề
            </div>
            <div className="menu__item" onClick={() => openPopup('changeEmoji')}>
              <img src="/emotion.png" alt="Emoji Icon" className="icon" /> Thay đổi biểu tượng cảm xúc
            </div>
            <div className="menu__item" onClick={() => openPopup('editNickname')}>
              <img src="/nickname.png" alt="Nickname Icon" className="icon" /> Chỉnh sửa biệt danh
            </div>
          </div>
        )}
      </div>



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
              <span>...</span>
            </div>
          </div>
        </div>
      )}

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


      <div className="menu__section">
        <p className="menu__section-title" onClick={toggleFiles}> File phương tiện & file
          <span className="arrow">{showFiles ? '▲' : '▼'}</span>
        </p>
        {showFiles && (
          <div>
            <div className="menu__item">
              <img src="/file1.png" alt="Media Icon" className="icon" /> File phương tiện</div>
            <div className="menu__item">
              <img src="/file.png" alt="File Icon" className="icon" /> File</div>
          </div>
        )}
      </div>

      <div className="menu__section">
        <p className="menu__section-title" onClick={toggleBlock}>Thêm
          <span className="arrow">{showBlock ? '▲' : '▼'}</span>
        </p>
        {showBlock && (
          <div>
            <div className="menu__item">
              <img src="/block_user.png" alt="Block Icon" className="icon" /> Chặn</div>
          </div>
        )}
      </div>
    </div>
  );
};

const getPopupTitle = (type) => {
  switch (type) {
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


export default InfoNghia;