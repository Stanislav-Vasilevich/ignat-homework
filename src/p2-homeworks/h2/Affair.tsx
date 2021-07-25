import React from 'react'
import {AffairType} from "./HW2";
import styles from './Affair.module.css';

const {item} = styles;

type AffairPropsType = {
  index: number
  affair: AffairType
  deleteAffairCallback: (_id: number) => void
}

const Affair: React.FC<AffairPropsType> = (props) => {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id)
  }

  return (
    <div className={item}>
      <span>{`${props.index + 1}. `}{props.affair.name}</span>
      <button onClick={deleteCallback}>X</button>
    </div>
  )
}

export default Affair
