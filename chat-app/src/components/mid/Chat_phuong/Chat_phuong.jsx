import React from 'react'
import "./chat_phuong.css"
import ava_group from '../../../assets/group.png'
import phone from '../../../assets/phone-call.png'
import phone_vid from '../../../assets/video-camera-alt.png'
import send from '../../../assets/send_button.png'
import emoji from '../../../assets/happiness.png'
import menu from '../../../assets/menu-burger.png'
import mic from '../../../assets/microphone.png'
import image from '../../../assets/image-gallery.png'
import cam from '../../../assets/camera.png'
import nghia from '../../../assets/nghia_img.jpg'
import duy from '../../../assets/duy_img.jpg'
import ngoc from '../../../assets/ngoc_img.png'
import duc from '../../../assets/duc_img.jpg'
import phuong from '../../../assets/phuong_img.jpg'

import { useState } from "react";

import EmojiPicker from "emoji-picker-react";

const Chat_phuong = () => {
  const [pickEmoji, setPickEmoji] = useState(false);
  const [text, setText] = useState("");

  const toggleEmojiPicker = () => {
    setPickEmoji((prev) => !prev);
  };

  const handleEmo = (e) => {
    setText((prev) => prev + e.emoji);
    setPickEmoji(false);
  };

  console.log(text);

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src={phuong} alt="" />
          <div className="user-status"></div>
          <div className="userDetails">
            <span>Phương Phạm Đức</span>
            <p>online</p>
          </div>
        </div>

        <div className="icons">
          <img src={phone} alt="" />
          <img src={phone_vid} alt="" />
          <img src={menu} alt="" />
        </div>
      </div>

      <div className="center">
        <div className="message">
          <img src={phuong} alt="" />
          <div className="messageText">
            <p>
              Hey Hey Nghia, I just got out of the meeting with the team, and it looks like we’ve been assigned to lead the new marketing campaign. I wanted to check in with you and get your thoughts on how we should start tackling this.
            </p>
            <div className="date">
              <span>10 minutes ago</span>
            </div>
          </div>
        </div>

        <div className="message own">
          {/* <img src={ava_group} alt="" /> */}
          <div className="messageText">
            <p>
              Oh, that’s exciting news! I’ve been looking forward to working on something new. From what I’ve read in the brief, it looks like this campaign will be pretty high-profile, especially since we’re targeting a younger demographic this time. I think we should start by outlining the core message we want to send. What do you think?
            </p>
            <div className="date">
              <span>8 minutes ago</span>
            </div>
          </div>
          <img src={nghia} alt="" />
        </div>

        <div className="message">
          <img src={phuong} alt="" />
          <div className="messageText">
            <p>
              I completely agree. Before diving into the creative side, we need to establish the key message and tone. Since we’re targeting a younger audience, I’m thinking we should go for something bold, fun, and interactive—something that grabs attention right away. Do you think we should consider using influencers for this campaign?
            </p>
            <div className="date">
              <span>7 minutes ago</span>
            </div>
          </div>
        </div>

        <div className="message own">
          <div className="messageText">
            <p>
              That’s a great point. Influencers are definitely a powerful tool when it comes to reaching younger people. We could identify a few that align with our brand values and have them promote the campaign on their platforms. Maybe we can even incorporate some interactive elements, like challenges or giveaways, to encourage engagement. I’ve seen this work really well for other brands.
            </p>
            <div className="date">
              <span>6 minutes ago</span>
            </div>
          </div>

          <img src={nghia} alt="" />
        </div>

        <div className="message">
          <img src={phuong} alt="" />
          <div className="messageText">
            <p>
              Exactly, I was thinking the same! We could run a contest or maybe even create a hashtag challenge on social media. That would get people talking and sharing. Plus, it would give us a ton of user-generated content that we could repurpose for the campaign. I also think we should keep the visuals vibrant and eye-catching—something that stands out in people’s feeds.
            </p>
            <div className="date">
              <span>4 minutes ago</span>
            </div>
          </div>

        </div>

        <div className="message own">
          {/* <img src={ava_group} alt="" /> */}
          <div className="messageText">
            <p>
              Yes! Bright colors, bold fonts, and dynamic animations would definitely get attention. And we can keep it consistent across all platforms—Instagram, TikTok, even YouTube. It’s important that the campaign feels cohesive no matter where people see it. We’ll also need to work closely with the design team to ensure everything flows smoothly. Do you think we should have a brainstorming session with them later this week?
            </p>
            <div className="date">
              <span>3 minutes ago</span>
            </div>
          </div>
          <img src={nghia} alt="" />
        </div>

        <div className="message">
          <img src={phuong} alt="" />
          <div className="messageText">
            <p>
              That’s a great idea. A brainstorming session would be a perfect way to get everyone on the same page and spark some creative ideas. I can set that up for Thursday afternoon. In the meantime, I’ll start drafting a rough outline for the campaign strategy, and you can maybe look into some influencers we might want to collaborate with. Sound good?
            </p>
            <div className="date">
              <span>2 minutes ago</span>
            </div>
          </div>
        </div>

        <div className="message own">
          {/* <img src={ava_group} alt="" /> */}
          <div className="messageText">
            <p>
              Sounds like a solid plan. I’ll start researching influencers who are popular in the demographic we’re targeting, and I’ll make a list of potential candidates for us to review. I’ll also look into some past campaigns that have been successful with this audience and see if there’s anything we can learn from them. We can bring all of that to the brainstorming session.
            </p>
            <div className="date">
              <span>1 minutes ago</span>
            </div>
          </div>
          <img src={nghia} alt="" />
        </div>

      </div>

      <div className="bottom">

        <img src={image} alt="" />
        <img src={cam} alt="" />
        <img src={mic} alt="" />

        <input
          type="text"
          value={text}
          placeholder="Type a message..."
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img src={emoji} alt="" onClick={toggleEmojiPicker} />
          <div className="picker">
            {pickEmoji && <EmojiPicker onEmojiClick={handleEmo} />}
          </div>
        </div>
        <button className="send">Send</button>
      </div>
    </div>
  );
};

export default Chat_phuong