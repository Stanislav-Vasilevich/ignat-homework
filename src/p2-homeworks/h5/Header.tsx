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
            <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.active} className={s.link}>PreJunior</NavLink>
            <NavLink to={PATH.JUNIOR} activeClassName={s.active} className={s.link}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.active} className={`${s.link} ${s.nav}`}>Junior+</NavLink>
            <button onClick={closeMenu} className={s.hamburger}>&#171;</button>
          </div>
          : <button onClick={openMenu} className={s.hamburger}>&#187;</button>
      }
    </div>
  )
}

export default Header;
