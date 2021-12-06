import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Greeting.module.css';
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
  name: string
  setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void
  addUser: () => void
  addUserByEnter: (e: KeyboardEvent<HTMLInputElement>) => void
  error: string
  totalUsers: number
}

const Greeting = (props: GreetingPropsType) => {
  const inputClass = props.error ? s.error : null;

  return (
    <div className={s.body}>
      <SuperInputText
        name={props.name}
        className={`${inputClass} ${s.input}`}
        onChange={props.setNameCallback}
        onKeyDown={props.addUserByEnter}
        value={props.name}
        placeholder={'текст...'}
      />
      <SuperButton
        onClick={props.addUser}
        disabled={!props.name}
      >
        add
      </SuperButton>
      <span className={s.counter}>{props.totalUsers}</span>
      <div className={s.errText}>{props.error}</div>
    </div>
  )
}

export default Greeting
