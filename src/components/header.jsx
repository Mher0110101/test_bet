import React from "react";
import "./header.css"

function Header(){
    return (
    <header>
        <div className="country">
            <img src="https://www.citypng.com/public/uploads/small/116400083872ufapshbc5rlhxbgmjjnclgav2xqn686q8gzi6zswwdpd9yao4chk8yve9dli3bzaeb8coyz5aeaexmpinkbqnwvzizuajstvaor.png" alt="eng" />
            EN
        </div>
        <div className="user">
            <img src="https://mpng.subpng.com/20180319/che/kisspng-united-states-computer-icons-desktop-wallpaper-cli-free-high-quality-person-icon-5ab04a54034fe1.2676895415215028040136.jpg" alt="us" />
            <div>
                <p>Hello Max!</p>
                <p className="date"> Last Login:Tu March 2014</p> 
            </div>
        </div>
    </header>    
    )
}

export default Header