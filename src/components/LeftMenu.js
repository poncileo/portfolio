import Profile from "./Profile";
import './LeftMenu.css';
import { Button, MenuItem, MenuList } from "@mui/material";
import { NavLink } from "react-router-dom";
import { FaHome, FaInfo, FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';
import { MdContactSupport, MdContentCopy } from 'react-icons/md';
import { useState } from "react";

function LeftMenu(props) {

    const [isCollapsed, setIsCollapsed] = useState(props.isCollapsed);

    const collapsed = isCollapsed ? 'collapsed' : ''
    const mobile = props.isMobile ? 'mobile' : ''
    const menuClasses = `LeftMenu ${collapsed} ${mobile}` 

    const toggleMenu = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        // <div className={isCollapsed ? "LeftMenu collapsed" : "LeftMenu"}>
        <div className={menuClasses}>
            {props.isMobile && <Button style={{color: 'var(--font-color)'}} onClick={toggleMenu}>
                {isCollapsed ? <FaAngleDoubleRight size={28}/> : <FaAngleDoubleLeft size={28} /> }
            </Button>}
            {!isCollapsed && <Profile/>}
            <MenuList>
                <NavLink to="/">
                    <MenuItem>
                        <FaHome size={20} className={!isCollapsed ? "menuIcon" : ""} />
                        {!isCollapsed && <div>HOME</div>}
                    </MenuItem>
                </NavLink>
                <NavLink to="/portfolio">
                    <MenuItem>
                        <MdContentCopy size={20} className={!isCollapsed ? "menuIcon" : ""} />
                        {!isCollapsed && <div>PORTFÓLIO</div>}
                    </MenuItem>
                </NavLink>
                <NavLink to="/about">
                    <MenuItem>
                        <FaInfo size={20} className={!isCollapsed ? "menuIcon" : ""} />
                        {!isCollapsed && <div>SOBRE MIM</div>}
                    </MenuItem>
                </NavLink>
                <NavLink to="/contact">
                    <MenuItem>
                        <MdContactSupport size={20} className={!isCollapsed ? "menuIcon" : ""} />
                        {!isCollapsed && <div>CONTATO</div>}
                    </MenuItem>
                </NavLink>
            </MenuList>
        </div>
    )
}

export default LeftMenu;