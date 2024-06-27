import "./navbar1.css"
import React ,{useState} from "react"
function navbar(){
    const[active,setactive]=useState("nav_menu");
    const[icontoggle,seticontoggle]=useState("nav_toggle")
    const navtoggle=() => {
        active==="nav_menu"?setactive("nav_menu nav_active"):setactive("nav_menu");

        icontoggle===('nav_toggle')?settoggle('nav_toggle toggle'):seticontoggle('nav_toggle')
    };
    return( 
       <div className="nav">
        <a href="#"className="logo">SM</a>
        <ul className={active}>
            <li className="nav-item"><a href="#" className="nav_link">Home</a></li>
            <li className="nav-item"><a href="#" className="nav_link">About</a></li>
            <li className="nav-item"><a href="#" className="nav_link">Contact</a></li>
            <li className="nav-item"><a href="#" className="nav_link">Service</a></li>
            <li className="nav-item"><a href="#" className="nav_link">Blog</a></li>
            <input type="search"placeholder="search"className="searchs"></input>
        </ul>
        <div onClick={navtoggle} className={icontoggle}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
       </div>
    )
}
export default navbar;