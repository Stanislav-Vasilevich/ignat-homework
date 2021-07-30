import React, {useState} from 'react';
import s from './HW6.module.css';
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import TitleSection from "../../components/TitleSection";

function HW6() {
  const [value, setValue] = useState<string>('')

  // сохранить значение в localStorage
  const save = () => {
    saveState<string>('editable-span-value', value);
  }

  // получить из localStorage значение
  const restore = () => {
    const state = restoreState('editable-span-value', '');
   setValue(state);
  }

  return (
    <div>
      <hr/>
      <TitleSection title={'homeworks 6'}/>

      {/*should work (должно работать)*/}
      <div className={s.body}>
        <SuperEditableSpan
          value={value}
          onChangeText={setValue}
          spanProps={{children: value ? undefined : 'enter text...'}}
        />

        <div className={s.buttons}>
          <SuperButton className={s.btn} onClick={save}>save</SuperButton>
          <SuperButton onClick={restore}>restore</SuperButton>
        </div>
      </div>


      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperEditableSpan/>*/}
      <hr/>
    </div>
  )
}

export default HW6
