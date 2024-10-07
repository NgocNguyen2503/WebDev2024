import './infopersonal.css';
import { useState } from 'react';

const Infopersonal = () => {
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
    
      <div className="sidebar__profile">
        <img
          src="phuong.jpg"
          alt="Profile"
          className="profile__image"
        />
        <p className="profile__name">Phạm Đức Phương</p>
  
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
        <p className="menu__section-title" onClick={toggleChatInfo}>
          Thông tin về đoạn chat
          <span className="arrow">{showChatInfo ? '▲' : '▼'}</span>
        </p>
        {showChatInfo && (
          <div>
            <div className="menu__item">
              <img src="/pin.png" alt="Pin Icon" className="icon" /> 
              Xem tin nhắn đã ghim
            </div>
          </div>
        )}
      </div>
      
        
      <div className="menu__section">
        <p className="menu__section-title" onClick={toggleChatCustom}>Tùy chỉnh đoạn chat
        <span className="arrow">{showChatInfo ? '▲' : '▼'}</span>
        </p>
        {showChatCustom && (
          <div>
            <div className="menu__item">
              <img src="/chude.png" alt="Theme Icon" className="icon" /> Đổi chủ đề
            </div>
            <div className="menu__item">
              <img src="/emotion.png" alt="Emoji Icon" className="icon" /> Thay đổi biểu tượng cảm xúc
            </div>
            <div className="menu__item">
              <img src="/nickname.png" alt="Nickname Icon" className="icon" /> Chỉnh sửa biệt danh
            </div>
          </div>
        )}
      </div>
  
      <div className="menu__section">
        <p className="menu__section-title" onClick={toggleFiles}>
          File phương tiện & file
          <span className="arrow">{showChatInfo ? '▲' : '▼'}</span>
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
        <p className="menu__section-title" onClick={toggleBlock}> Chặn
        </p>
      </div>
    </div> 
  );
};

export default Infopersonal;