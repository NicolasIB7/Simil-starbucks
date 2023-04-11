import React from "react";
import {NavLink} from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar=()=>{

    return(
        <div className={style.container} style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className={style.logo}>
          <NavLink to="/">
            <img src="https://cdn.iconscout.com/icon/free/png-256/starbucks-1-226354.png" alt="" />
          </NavLink>
        </div>
        <div className={style.menus} >
          <NavLink to="/menu"  className={style.item} >MENU</NavLink>
          <NavLink to="/cafe"  className={style.item}>CAFÉ</NavLink>
          <NavLink to="/experiencia"  className={style.item}>EXPERIENCIA STARBUCKS</NavLink>
        </div>
      </div>
      
    )


}

export default NavBar;