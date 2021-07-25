import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Greeting.module.css';

type GreetingPropsType = {
  name: string
  setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void
  addUser: () => void
  addUserByEnter: (e: KeyboardEvent<HTMLInputElement>) => void
  error: string
  totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, addUserByEnter, error, totalUsers}
) => {
  const inputClass = error ? s.error : '';

  return (
    <div className={s.body}>
      <input
        className={`${inputClass} ${s.input}`}
        onChange={setNameCallback}
        onKeyDown={addUserByEnter}
        value={name}
        onBlur={addUser}
      />
      <button className={s.btn} onClick={addUser} disabled={!name ? true : false}>add</button>
      <span className={s.counter}>{totalUsers}</span>
      <div className={s.errText}>{error}</div>
    </div>
  )
}

export default Greeting
