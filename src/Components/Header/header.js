import React from "react";
import {Link} from "react-scroll";

function Header() {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div id="logo" className="pull-left" >
                        <Link activeClass="active" to="/" spy={true} smooth={true} duration={3000} ><img id="logo" src="./Sagalovich_Shamir_Logo.png" alt="" title="" /></Link>
                    </div>
                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li><Link activeClass="active" to="/about" spy={true} smooth={true} duration={3000} className="link">קצת עלינו</Link></li>
                            <li><Link activeClass="active" to="/catalog" spy={true} smooth={true} duration={3000} className="link" >קטלוג</Link></li>
                            <li><Link activeClass="active" to="/calc"  spy={true} smooth={true} duration={3000} className="link" >מחשבון</Link></li>
                            <li><Link activeClass="active" to="/"  spy={true} smooth={true} duration={3000} className="link" >דף הבית</Link></li>
                        </ul>
                    </nav>



                </div>
            </header>
        </div>
    );
}
export default Header;


                {/*<header>*/}
                {/*    <div>*/}
                {/*        <img className="MainLogo" src= "./Sagalovich_Shamir_Logo.png" alt=""/>*/}
                {/*    </div>*/}
                {/*</header>*/}
                {/*<div>*/}
                {/*    <ul className="header-menu">*/}
                {/*        <li><Link to="/about" className="link">קצת עלינו</Link></li>*/}
                {/*        <li><Link to="/catalog" className="link" >קטלוג</Link></li>*/}
                {/*        <li><Link to="/calc" className="link" >מחשבון</Link></li>*/}
                {/*        <li><Link to="/" className="link" >דף הבית</Link></li>*/}
                {/*        /!*<span id="vertical-line"></span>*!/*/}



                {/*        /!*<span id="vertical-line"></span>*!/*/}

                {/*    </ul>*/}
                {/*</div>*/}
