import React from 'react'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import serach_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import './Navbar.css'

const Navbar = ({setSidebar}) => {

    // const handleMouseDown = () => {
    //     const sidebar = document.getElementsByClassName('side-bar');
    //     sidebar.style.display = 'none';
    // }

    return (
        <nav className='flex-div'>
            <div className="nav-left flex-div">
                <img  onClick={()=> setSidebar(prev => prev ? false: true)} className='menu-icon' src={menu_icon} alt="" />
                <img className='logo' src={logo} alt="" />
            </div>

            <div className='nav-middle flex-div'>
                <div className="search-box flex-div">
                    <input type="text" placeholder='Search' />
                    <img src={serach_icon} alt="" />
                </div>

            </div>

            <div className="nav-right flex-div">
                <img src={upload_icon} alt="" />
                <img src={more_icon} alt="" />
                <img src={notification_icon} alt="" />
                <img src={profile_icon} className='user-icon' alt="" />
            </div>
        </nav>
    )
}

export default Navbar