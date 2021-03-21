import React from "react";
import instagramIconSvg from "../../img/instagram-icon.svg";
import vkIconSvg from "../../img/vk-icon.svg";
import envelopeIconSvg from "../../img/envelope-icon.svg";
import "./header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="header__row">
                <div className="header__row__icons">
                    <a href="https://www.instagram.com/k45_studio/" target="_blank">
                        <img className="icon" src={instagramIconSvg} alt="instagram-icon"/>
                    </a>
                    <a href="https://vk.com/k45_studio" target="_blank">
                        <img className="icon vk-icon" src={vkIconSvg} alt="vk-icon"/>
                    </a>
                    <a href="mailto:k45.studio.m11@gmail.com">
                        <img className="icon" src={envelopeIconSvg} alt="envelope-icon"/>
                    </a>
                </div>
                <div className="header__row__main-logo">
                    K45 STUDIO
                </div>
                <div className="header__row__phone-number">
                    <a href="tel:+375447220255">
                        +375 44 722 02 55
                    </a>
                </div>
            </div>

        </header>
    )
}

export default Header;

