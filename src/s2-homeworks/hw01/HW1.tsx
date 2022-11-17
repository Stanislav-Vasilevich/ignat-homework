import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './img/avatar.jpg'
import avatar2 from './img/Johnny-Depp.jpg'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

type UserType = {
    avatar: string
    name: string
}

type MessageTypeMessage = {
    text: string
    time: string
}

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number
    user: UserType
    message: MessageTypeMessage
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar,
        name: 'Stanislav Vasilevich',
    },
    message: {
        text: 'Hello Johnny! How are you?',
        time: '22:00',
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar2,
        name: 'Johnny Depp',
    },
    message: {
        text: 'Hello Stas! I a\'m good, and you?',
        time: '22:00',
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.container}>
                <div className={s2.hwTitle}>Hometask №1</div>
            </div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1
