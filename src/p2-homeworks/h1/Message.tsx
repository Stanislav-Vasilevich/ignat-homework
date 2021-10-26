import React from 'react';
import styles from './Message.module.css';

const {item, body, background, text, hour} = styles;

type MessagePropsType = {
  avatar: string
  name: string
  message: string
  time: string
}

const Message: React.FC<MessagePropsType> = (
  {
    avatar,
    name,
    message,
    time
  }
) => {
  return (
    <div className={item}>
      <img src={avatar} alt={name}/>
      <div className={body}>
        <div className={background}/>
        <div className={text}>
          <h2>Артем</h2>
          <p>{message}</p>
        </div>
        <time className={hour} dateTime={time}>{time}</time>
      </div>
    </div>
  )
}

export default Message
