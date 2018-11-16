import React from 'react'
import {NavLink} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'

//Functional Component, links to different render pages
const NavBar = props => {
console.log(props)
  return(
    <Menu>
      <NavLink exact to="/">
        <Menu.Item  icon='jenkins'/>
      </NavLink>

      <NavLink exact to="/profile">
        <Menu.Item>Profile</Menu.Item>
      </NavLink>

      <NavLink exact to="/about">
        <Menu.Item>About</Menu.Item>
      </NavLink>

      {props.loggedIn ?
        <NavLink exact to="/login">
          <Menu.Item onClick={() => props.logout()}>Log-out</Menu.Item>
        </NavLink>
        :
        <NavLink exact to="/login">
          <Menu.Item>Log-In</Menu.Item>
        </NavLink>}

      <NavLink exact to="/signup">
        <Menu.Item>Sign-Up</Menu.Item>
      </NavLink>


    </Menu>
  )
}

export default NavBar
