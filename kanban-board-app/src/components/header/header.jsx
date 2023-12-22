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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="#000000"
                        stroke="#000000"
                        style={{ background: 'none' }}
                        >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g>
                            <g>
                                <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M256,490.667 c-50.859,0-97.856-16.448-136.341-44.053l55.125-18.389c33.365-13.909,44.48-64,44.48-76.224c0-3.2-1.429-6.208-3.883-8.235 c-11.925-9.835-24.576-26.901-24.576-39.168c0-14.357-5.867-22.507-11.584-26.496c-2.667-7.381-6.976-20.821-7.339-29.291 c5.312-0.597,9.451-5.12,9.451-10.603v-56.896c0-30.443,29.077-74.667,74.667-74.667c42.837,0,54.123,18.453,55.552,25.749 c-0.384,1.365-0.533,2.709-0.405,3.904c0.619,5.781,4.949,8.533,7.275,10.005c3.669,2.325,12.245,7.787,12.245,35.029v56.896 c0,5.909,2.859,10.005,8.747,10.005c0.192,0.192,0.448,0.661,0.683,1.131c-0.512,8.512-4.651,21.397-7.317,28.736 c-5.696,3.989-11.584,12.139-11.584,26.496c0,12.267-12.651,29.333-24.576,39.168c-2.475,2.027-3.883,5.056-3.883,8.235 c0,12.203,11.136,62.315,45.227,76.48l54.379,18.133C353.877,474.219,306.859,490.667,256,490.667z M408.256,434.219 c-0.981-3.157-3.243-5.867-6.613-6.997l-56.149-18.688c-19.627-8.171-28.736-39.573-30.869-52.139 c14.528-13.504,27.947-33.621,27.947-51.797c0-6.165,1.749-8.555,1.408-8.619c3.328-0.832,6.037-3.2,7.317-6.379 c1.045-2.624,10.24-26.069,10.24-41.877c0-0.853-0.107-1.728-0.32-2.581c-1.344-5.355-4.48-10.752-9.173-14.123v-49.664 c0-30.72-9.365-43.563-19.243-51.008c-2.219-15.253-18.56-44.992-76.757-44.992c-59.477,0-96,55.915-96,96v49.664 c-4.693,3.371-7.829,8.768-9.173,14.123c-0.213,0.832-0.32,1.707-0.32,2.581c0,15.808,9.195,39.253,10.24,41.877 c1.28,3.179,2.965,5.205,6.293,6.037c0.683,0.405,2.432,2.773,2.432,8.96c0,18.176,13.419,38.293,27.947,51.797 c-2.133,12.565-11.157,43.925-30.144,51.861l-56.896,18.965c-3.392,1.131-5.653,3.861-6.635,7.04 C53.419,391.168,21.333,327.317,21.333,256c0-129.387,105.28-234.667,234.667-234.667S490.667,126.613,490.667,256 C490.667,327.275,458.603,391.125,408.256,434.219z"></path>
                            </g>
                            </g>
                        </g>
                    </svg>
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