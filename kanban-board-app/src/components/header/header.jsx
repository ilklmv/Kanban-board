import React, { useState } from "react";
import './header.css';

const Header = () => {
    const [ menuVisible, setMenuVisible] = useState(false);

    // eslint-disable-next-line no-unused-vars
    const handleArrowClick = () => {
        setMenuVisible(!menuVisible);
    }

    const handleMenuItemHover = () => {};

    const handleMenuItemClick = () => {};

    return (
        <header className="header">
            <div className="header__title">Awesome Kanban board</div>
            <div className="header__user-menu">
                <div className="user-avatar">
                    <img src="./src/icons/user-avatar.png" alt="User Avatar" />
                </div>
                <div 
                    className={`arrow-down ${menuVisible ? "arrow-up" : ""}`}
                    onClick={handleArrowClick}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#ffffff"
                        width="24px"
                        height="24px"
                    >
                        <path d="M7 14l5-5 5 5z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                </div>
                {menuVisible && (
                    <div className="dropdown-menu">
                        <a 
                        href="/profile"
                        onMouseEnter={handleMenuItemHover}
                        onClick={handleMenuItemClick}
                        >
                            Profile
                        </a>
                        <a 
                        href="/logout"
                        onMouseEnter={handleMenuItemHover}
                        onClick={handleMenuItemClick}
                        >
                            Log Out
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;