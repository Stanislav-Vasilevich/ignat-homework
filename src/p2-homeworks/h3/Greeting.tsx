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

const Greeting: React.FC<GreetingPropsType> = (
  {
    name,
    setNameCallback,
    addUser,
    addUserByEnter,
    error,
    totalUsers
  }
) => {
  const inputClass = error ? s.error : '';

  return (
    <div className={s.body}>
      <SuperInputText
        className={`${inputClass} ${s.input}`}
        onChange={setNameCallback}
        onKeyDown={addUserByEnter}
        value={name}
        onBlur={addUser}
        placeholder={'текст...'}
      />
      <SuperButton
        onClick={addUser}
        disabled={!name}
      >
        add
      </SuperButton>
      <span className={s.counter}>{totalUsers}</span>
      <div className={s.errText}>{error}</div>
    </div>
  )
}

export default Greeting
