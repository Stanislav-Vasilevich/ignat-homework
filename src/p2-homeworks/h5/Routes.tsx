import React from 'react'
import {Routes, Route} from 'react-router-dom';
import PreJunior from './pages/PreJunior';
import Error404 from './pages/Error404';
import Junior from './pages/Junior';
import JuniorPlus from './pages/JuniorPlus';

export const PATH = {
  PRE_JUNIOR: '/pre-junior',
  JUNIOR: '/junior',
  JUNIOR_PLUS: '/junior-plus',
}

function RoutesPath() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Junior/>}/>
        <Route path={'/ignat-homework'} element={<PreJunior/>}/>
        <Route path={'/*'} element={<Error404/>}/>
        <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
        <Route path={PATH.JUNIOR} element={<Junior/>}/>
        <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
      </Routes>
    </div>
  )
}

export default RoutesPath;

