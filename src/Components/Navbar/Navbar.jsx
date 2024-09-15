import React from 'react';
import './Navbar.css';
import menu_icon from '../../assets/menu.jpeg';
import logo from '../../assets/logo.jpeg';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/jack.png';

const Navbar = ({ setSidebar }) => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img className='menu-icon'onClick={() => setSidebar(prev =>prev===false?true:false)} src={menu_icon} alt="Menu Icon" aria-label="Toggle sidebar" />
        <img className='logo' src={logo} alt="Logo" />
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder='Search' />
          <img src={search_icon} alt="Search Icon" aria-label="Search" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={upload_icon} alt="Upload Icon" aria-label="Upload" />
        <img src={more_icon} alt="More Icon" aria-label="More options" />
        <img src={notification_icon} alt="Notification Icon" aria-label="Notifications" />
        <img src={profile_icon} className='user-icon' alt="Profile Icon" aria-label="Profile" />
      </div>
    </nav>
  );
}



export default Navbar;
