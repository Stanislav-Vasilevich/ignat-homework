import React from 'react';
import {HashRouter} from "react-router-dom";
import Header from './Header';
import Routes from './Routes';
import s from './HW5.module.css'
import TitleSection from "../../components/TitleSection";

function HW5() {
  return (
    <div className={s.page}>
      <HashRouter>
        <TitleSection title={'homeworks 5'}/>
        <Header/>
        <Routes/>
      </HashRouter>
    </div>
  )
}

export default HW5
