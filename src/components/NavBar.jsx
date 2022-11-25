import { useState } from 'react';
import Logo from '../assets/Logo.png'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const NavItem = ({page, active}) => {
    return (
    <NavLink 
    className='navlink' 
    style={active ? {color: "white"} : {color: "#C5BFBF"}}
    >
        <li>
            <img src={Logo} alt="" />
        </li>
        <p>{page}</p>
    </NavLink>
    )
}


const NavBar = () => {
    const [open, setOpen] = useState(true);
    return(
    <>
        <MenuIcon 
            className='nav-open'
            onClick={() => setOpen(true)}
        /> 


    <nav className={open ? "navbar expaned" : "navbar collapsed"}>
        {
            open && <CloseIcon className='nav-close' onClick={() => setOpen(false)}/>  
        }
        <div className='logo'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <p>MÔI TRƯỜNG <span> XANH</span></p>
        </div>
        <hr />
        <ul>
            <NavItem page="Trang chủ" active={false}/>
            <NavItem page="Phân việc" active={true} />
            <NavItem page="Nhân viên" active={false}/>
            <NavItem page="Phương tiện" active={false} />
            <NavItem page="MCP"active={false} />
        </ul>
        <hr />
        <ul>
            <NavItem page="Trò chuyện" active={false}/>
            <NavItem page="Đăng xuất" active={false}/>
        </ul>

    </nav>
    </>
     
    )
}

export default NavBar 