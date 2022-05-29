import React from 'react'
import s from './Message.module.css'

export type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.message}>
            <div className={s.avatar}><img src={props.avatar}/></div>
            <div className={s.triangle}></div>
            <div className={s.messageWindow}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    );
}

export default Message
