import React from 'react'
import { css } from 'emotion'
import NavLogo from './NavLogo'
import NavItem from './NavItem'
import HomeIcon from '../static/Home.png'
import KeyIcon from '../static/Key.png'
import { Link } from 'react-router-dom'
import { FiEdit, FiSettings, FiLogOut } from "react-icons/fi";

const MonitorsIcon = <FiEdit />
const SettingsIcon = <FiSettings />
const LogoutIcon = <FiLogOut />

export default function Nav({ fixed, history }) {

    const logout = () => {
        localStorage.removeItem('token')
        history.push('/')
    }

    return (
        <div className={ fixed? css({ backgroundColor: '#082B84',width: '240px', height: '100vh', position: 'fixed'}) : css({ backgroundColor: '#082B84',width: '240px', height: '100vh'})}>
            <NavLogo />
            <Link to='/home' className={css({ textDecoration: 'none'})}>
                <NavItem title="Home" image={HomeIcon} />
            </Link>
            {/* <Link to='/monitors' className={css({ textDecoration: 'none'})}>
                <NavItem title="Monitors" icon={MonitorsIcon} />
            </Link> */}
            <Link to='/admin' className={css({ textDecoration: 'none'})}>
                <NavItem title="Admin" image={KeyIcon} />
            </Link>
            {/* <Link to='/settings' className={css({ textDecoration: 'none'})}>
                <NavItem title="Settings" icon={SettingsIcon} />
            </Link> */}
            <div onClick={logout}>
                <NavItem title="Logout" icon={LogoutIcon} />
            </div>
        </div>
    )
}
