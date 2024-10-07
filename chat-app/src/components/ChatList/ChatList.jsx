import React from 'react';
import './ChatList.css'; 
import profile_icon from "../../assets/profile_icon.png";
import edit_icon from "../../assets/edit_icon.png";

const ChatList = () => {
  const chatItems = [
    {
      name: 'Web Application',
      lastMessage: 'Bạn: alo123',
      img: profile_icon, 
    },
    {
      name: 'Phương Phạm Đức',
      lastMessage: '...',
      img: profile_icon, 
    },
    {
      name: 'Nguyễn Quang Ngọc',
      lastMessage: 'Haizz',
      img: profile_icon,
    },
    {
      name: 'Nguyễn Trọng Nghĩa',
      lastMessage: 'ok',
      img: profile_icon,
    },
    {
      name: 'Nguyễn Minh Đức',
      lastMessage: '123',
      img: profile_icon,
    },
    {
      name: 'Nguyễn Đăng Duy',
      lastMessage: 'Ok b oi',
      img: profile_icon,
    }
  ];

  return (
    <div className="chat-list">
      <div className="chat-list-header">
        <h3>Đoạn chat</h3>
        <img src={edit_icon} alt="Edit" className="edit-icon" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Tìm kiếm trên Messenger" />
      </div>
      <div className="tabs">
        <button className="active">Hộp thư</button>
        <button>Cộng đồng</button>
      
      </div>
      <div className='Conversations'>
      {chatItems.map((item, index) => (
        <div className="chat-item" key={index}>
          <img src={item.img} alt={item.name} className="chat-item-img" />
          <div className="chat-item-content">
            <h4>{item.name}</h4>
            <p>{item.lastMessage}</p>
          </div>
        </div>
            ))}
      </div>
      
  
    </div>
  );
};

export default ChatList;
