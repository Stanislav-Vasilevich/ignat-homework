import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import TitleSection from "../../components/TitleSection";

export type UserType = {
  _id: string
  name: string
}

function HW3() {
  const [users, setUsers] = useState<Array<UserType>>([]);

  const addUserCallback = (name: UserType) => {
    setUsers([...users, name]);
  }

  return (
    <div>
      <hr/>
      <TitleSection title={'homeworks 3'}/>

      <GreetingContainer
        users={users}
        addUserCallback={addUserCallback}
      />

      <hr/>
      <hr/>
    </div>
  )
}

export default HW3;
