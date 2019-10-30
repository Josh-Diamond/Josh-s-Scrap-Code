import React from 'react'
import { css } from 'emotion'
import NavLogo from './NavLogo'
import NavItem from './NavItem'
import HomeIcon from '../static/Home.png'
import KeyIcon from '../static/Key.png'
import { FiEdit } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";


const MonitorsIcon = <FiEdit />
const SettingsIcon = <IoIosSettings />

export default function Nav() {
    return (
        <div className={css({ backgroundColor: '#082B84',width: '200px', height: '100vh'})}>
            <NavLogo />
            <NavItem title="Home" image={HomeIcon} />
            <NavItem title="Monitors" icon={MonitorsIcon} />
            <NavItem title="Admin" image={KeyIcon} />
            <NavItem title="Settings" icon={SettingsIcon} />
        </div>
    )
}
