import React, {useState} from 'react'
import Affairs from './Affairs'
import TitleSection from "../../components/TitleSection";

// types
export type AffairPriorityType = 'high' | 'low' | 'middle';
export type FilterType = 'all' | AffairPriorityType
export type AffairType = {
  _id: number
  name: string
  priority: AffairPriorityType
}

// constants
const defaultAffairs: Array<AffairType> = [
  {_id: 1, name: 'React', priority: 'high'},
  {_id: 2, name: 'anime', priority: 'low'},
  {_id: 3, name: 'games', priority: 'middle'},
  {_id: 4, name: 'work', priority: 'high'},
  {_id: 5, name: 'html & css', priority: 'low'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
  if (filter === 'high') return affairs.filter(i => i.priority === 'high')
  if (filter === 'low') return affairs.filter(i => i.priority === 'low')
  if (filter === 'middle') return affairs.filter(i => i.priority === 'middle')
  else {
    return affairs;
  }
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
  return affairs.filter(a => a._id !== _id)
}

function HW2() {
  const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
  const [filter, setFilter] = useState<FilterType>('all')

  const filteredAffairs = filterAffairs(affairs, filter)
  const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

  return (
    <div>
      <hr/>
      <TitleSection title={'homeworks 2'}/>

      {/*should work (должно работать)*/}
      <Affairs
        data={filteredAffairs}
        setFilter={setFilter}
        deleteAffairCallback={deleteAffairCallback}
        filter={filter}
      />

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeAffairs/>*/}
      <hr/>
    </div>
  )
}

export default HW2
