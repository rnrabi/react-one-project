import React from 'react';
import logo from '../../../public/Logo.svg'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary h-24">
                <div className="flex-1">
                  <img src={logo} alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-white">
                        <li><a>Order Revew</a></li>
                        <li><a> Manage Inventory </a> </li>
                        <li><a>Log in</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;