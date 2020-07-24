import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header">
                {/*<header>*/}
                {/*    <h2>מתכות</h2>*/}
                {/*</header>*/}
                <div>
                    <ul className="header-menu">
                        <li><Link to="/about" className="link">קצת עלינו</Link></li>
                        <li><Link to="/catalog" className="link" >קטלוג</Link></li>
                        <li><Link to="/calc" className="link" >מחשבון</Link></li>
                        <li><Link to="/" className="link" >דף הבית</Link></li>
                        {/*<span id="vertical-line"></span>*/}



                        {/*<span id="vertical-line"></span>*/}

                    </ul>
                </div>
        </div>
    );
}
export default Header;