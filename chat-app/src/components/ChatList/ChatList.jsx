import React from 'react';
import './ChatList.css'; 
import profile_icon from "../../assets/profile_icon.png";
import edit_icon from "../../assets/edit_icon.png";
import nghia from '../../assets/nghia_img.jpg'
import duy from '../../assets/duy_img.jpg'
import ngoc from '../../assets/ngoc_img.png'
import duc from '../../assets/duc_img.jpg'
import phuong from '../../assets/phuong_img.jpg'
import ava_group from '../../assets/group.png'

const ChatList = () => {
  const chatItems = [
    {
      name: 'Web Application',
      lastMessage: 'Thank, Phuong!...',
      img: ava_group, 
    },
    {
      name: 'Phương Phạm Đức',
      lastMessage: 'Sounds like...',
      img: phuong, 
    },
    {
      name: 'Nguyễn Quang Ngọc',
      lastMessage: 'Yes, that...',
      img: ngoc,
    },
    {
      name: 'Nguyễn Trọng Nghĩa',
      lastMessage: 'Today was...',
      img: nghia,
    },
    {
      name: 'Nguyễn Minh Đức',
      lastMessage: 'No problem...',
      img: duc,
    },
    {
      name: 'Nguyễn Đăng Duy',
      lastMessage: 'Yeah, delays...',
      img: duy,
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
