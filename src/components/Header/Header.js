import { Menu } from "semantic-ui-react";
import "./Header.scss";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header(){
    const currentPath = useLocation();
    const finalCurrentPath =currentPath.pathname.replace( "/","")
    const [activeItem, setActiveItem] = useState("finalCurrentPath")
    const navigate = useNavigate();
    const handleItemClicl = (e,{name}) =>{
        setActiveItem (name);
        navigate(`/${name}`);
        
    }

    return(
        <div className="header-menu">
            <Menu secondary>
                <Menu.Item
                  name="home"  
                  active={activeItem === "home"}
                    onClick={handleItemClicl}/>
                <Menu.Item 
                  name="series"  
                  active={activeItem === "series"}                  
                    onClick={handleItemClicl}/>
                <Menu.Item 
                  name="comics"  
                  active={activeItem === "comics"}
                    onClick={handleItemClicl}/>
            </Menu>
        </div>
    );
}