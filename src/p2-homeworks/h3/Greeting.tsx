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
    <div>
      <input
        className={inputClass}
        onChange={setNameCallback}
        onKeyDown={addUserByEnter}
        value={name}
        onBlur={addUser}
      />
      <button onClick={addUser} disabled={!name ? true : false}>add</button>
      <span>{totalUsers}</span>
      <div className={s.err}>{error}</div>
    </div>
  )
}

export default Greeting
