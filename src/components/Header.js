import centr from './img/centr.png';
import Logo from './img/logo.png';
import React from "react";
function Header() {
    return (
        <div class="body01">
            <div class="header">
                <div class="logo"><img src={Logo} alt="" /></div>
                <div class="navbar">
                    <p>KNOW-HOW</p>
                    <p>O NAS</p>
                    <p>BLOG</p>
                    <p>KONTAKT</p>
                </div>
            </div>
            <div id="center">
                <img src={centr} alt="" />
                <div class="zag">
                    <span> Spin!</span>
                    <span>[re]designing</span>
                    <span>your business</span>
                </div>
            </div>
        </div>

    )
}
export default Header;