import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import s from './Header.module.css';

const Header = () => {
  const [navigation, setNavigation] = useState(false);

  const closeMenu = () => {
    setNavigation(false);
  }

  const openMenu = () => {
    setNavigation(true);
  }

  return (
    <div className={s.menu}>
      {
        navigation
          ? <div>
            <NavLink
              className={(params) => params.isActive ? s.active : s.link}
              to={PATH.PRE_JUNIOR}
            >
              PreJunior
            </NavLink>
            <NavLink
              to={PATH.JUNIOR}
              className={(params) => params.isActive ? s.active : s.link}>
              Junior
            </NavLink>
            <NavLink
              to={PATH.JUNIOR_PLUS}
              className={(params) => params.isActive ? s.active : s.link}>
              Junior+
            </NavLink>
            <button onClick={closeMenu} className={s.hamburger}>&#171;</button>
          </div>
          : <button onClick={openMenu} className={s.hamburger}>&#187;</button>
      }
    </div>
  )
}

export default Header;
