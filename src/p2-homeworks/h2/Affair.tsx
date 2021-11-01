import React from 'react'
import {AffairType} from "./HW2";
import styles from './Affair.module.css';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

const {item} = styles;

type AffairPropsType = {
  index: number
  affair: AffairType
  deleteAffairCallback: (_id: number) => void
}

const Affair: React.FC<AffairPropsType> = (props) => {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id);
  }

  return (
    <div className={item}>
      <span>{`${props.index + 1}. `}{props.affair.name}</span>
      <SuperButton onClick={deleteCallback}>X</SuperButton>
    </div>
  )
}

export default Affair
