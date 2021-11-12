import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import styles from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

const {body, buttons, active} = styles;

type AffairsPropsType = {
  data: Array<AffairType>
  setFilter: (filter: FilterType) => void
  deleteAffairCallback: (_id: number) => void
  filter: FilterType
}

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((a, index) => (
    <Affair
      index={index}
      key={a._id}
      affair={a}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ))

  const setAll = () => props.setFilter('all')
  const setHigh = () => props.setFilter('high')
  const setMiddle = () => props.setFilter('middle')
  const setLow = () => props.setFilter('low')

  const styleAll = (str: string) => props.filter === str ? active : ''
  const styleHigh = (str: string) => props.filter === str ? active : ''
  const styleMiddle = (str: string) => props.filter === str ? active : ''
  const styleLow = (str: string) => props.filter === str ? active : ''

  return (
    <div className={body}>

      <div>
        {mappedAffairs}
      </div>

      <div className={buttons}>
        <SuperButton className={styleAll('all')} onClick={setAll}>All</SuperButton>
        <SuperButton className={styleHigh('high')} onClick={setHigh}>High</SuperButton>
        <SuperButton className={styleMiddle('middle')} onClick={setMiddle}>Middle</SuperButton>
        <SuperButton className={styleLow('low')} onClick={setLow}>Low</SuperButton>
      </div>
    </div>
  )
}

export default Affairs
