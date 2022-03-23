import React from 'react';
import Header from './Header';
import s from './HW5.module.css'
import TitleSection from '../../components/TitleSection';
import RoutesPath from './Routes';

function HW5() {
  return (
    <div className={s.page}>
      <TitleSection title={'homeworks 5'}/>
      <Header/>
      <RoutesPath/>
    </div>
  )
}

export default HW5;
