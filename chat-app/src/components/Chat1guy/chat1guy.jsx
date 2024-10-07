import './chat1guy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBellSlash, faSearch, faChevronDown, faCircle, faThumbsUp, faFont, faFileImage, faFile, faThumbTack, faMinusCircle} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Chat1guy = () => {
  const [showChatInfo, setShowChatInfo] = useState(false);
  const [showChatCustom, setShowChatCustom] = useState(false);
  const [showFiles, setShowFiles] = useState(false);
  const [showBlock, setShowBlock] = useState(false);
  
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
return (
    <div className="sidebar"> 
    
      {/* Phần thông tin người dùng */}
      <div className="sidebar__profile">
        <img
          src="phuong.jpg"
          alt="Profile"
          className="profile__image"
        />
        <p className="profile__name">Phạm Đức Phương</p>
  
        <div className="profile__actions">
          <button className="profile__action-button">
            <FontAwesomeIcon icon={faBellSlash} className="action-icon" />
            <span>Tắt thông báo</span>
          </button>
  
          <button className="profile__action-button">
            <FontAwesomeIcon icon={faSearch} className="action-icon" />
            <span>Tìm kiếm</span>
          </button>
        </div>
      </div>
  
      {/* Các nút chức năng */}
      <div className="menu__section">
        <p className="menu__section-title" onClick={toggleChatInfo}>Thông tin về đoạn chat
          <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
        </p>
        {showChatInfo && (
          <div>
            <div className="menu__item">
              <FontAwesomeIcon icon={faThumbTack} className="action-icon-black" /> Tin nhắn đã ghim
            </div>
          </div>
        )}
        
      <div className="menu__section">
        <p className="menu__section-title" onClick={toggleChatCustom}>
          Tùy chỉnh đoạn chat
          <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
        </p>
        {showChatCustom && (
          <div>
            <div className="menu__item">
              <FontAwesomeIcon icon={faCircle} className="action-icon-theme" /> Đổi chủ đề
            </div>
            <div className="menu__item">
              <FontAwesomeIcon icon={faThumbsUp} className="action-icon-emotion" /> Thay đổi biểu tượng cảm xúc
            </div>
            <div className="menu__item">
              <FontAwesomeIcon icon={faFont} className="action-icon-black" /> Chỉnh sửa biệt danh
            </div>
          </div>
        )}
      </div>
  
      <div className="menu__section">
        <p className="menu__section-title" onClick={toggleFiles}>
          File phương tiện & file
          <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
        </p>
        {showFiles && (
          <div>
            <div className="menu__item">
            <FontAwesomeIcon icon={faFileImage} className="action-icon-black" /> File phương tiện</div>
            <div className="menu__item">
            <FontAwesomeIcon icon={faFile} className="action-icon-black" /> File</div>
          </div>
        )}
      </div>
  
      <div className="menu__section">
        <p className="menu__section-title" onClick={toggleBlock}> Chặn
          <FontAwesomeIcon icon={faMinusCircle} className="action-icon-red" />
        </p>
      </div>
    </div> 
  </div>
  );
};

export default Chat1guy;