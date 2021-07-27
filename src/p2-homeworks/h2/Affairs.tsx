import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import styles from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

const {body, buttons} = styles;

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number)  => any
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType, index) => (
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

    return (
        <div className={body}>

            <div>
              {mappedAffairs}
            </div>

            <div className={buttons}>
              <SuperButton onClick={setAll}>All</SuperButton>
              <SuperButton onClick={setHigh}>High</SuperButton>
              <SuperButton onClick={setMiddle}>Middle</SuperButton>
              <SuperButton onClick={setLow}>Low</SuperButton>
            </div>
        </div>
    )
}

export default Affairs
