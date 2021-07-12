import React from 'react'
import {AffairType} from "./HW2";
import styles from './Affair.module.css'

const {item} = styles;

type AffairPropsType = {
  // key не нужно типизировать
  index: number
  affair: AffairType // need to fix any
  deleteAffairCallback: (_id: number) => any // need to fix any
}

function Affair(props: AffairPropsType) {
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
