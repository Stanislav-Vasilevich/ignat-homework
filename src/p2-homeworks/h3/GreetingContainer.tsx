import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import {v1} from "uuid";

type GreetingContainerPropsType = {
  users: Array<UserType>
  addUserCallback: (name: UserType) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');

  const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
    setError('');
  }

  const addUser = () => {
    if (name.length <= 1 || name === '') {
      setError('Минимальное количество символов 1');
    } else {
      setError('');
      setName('');

      alert(`Hello ${name.trim()} !`);

      addUserCallback({name: name.trim(), _id: v1()});
    }
  }

  const addUserByEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      addUser();
    }
  }

  let totalUsers = users.length;

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      addUserByEnter={addUserByEnter}
      error={error}
      totalUsers={totalUsers}
    />
  )
}

export default GreetingContainer;
