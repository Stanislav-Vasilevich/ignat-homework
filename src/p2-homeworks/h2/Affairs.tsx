import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import styles from './Affairs.module.css'

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
              <button onClick={setAll}>All</button>
              <button onClick={setHigh}>High</button>
              <button onClick={setMiddle}>Middle</button>
              <button onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
