import React from 'react';
import { Link } from 'react-router-dom';

function NaviHome() {
    const links = [
        { path: '/World', label: 'World', icon: 'fa-globe' },
        { path: '/India', label: 'India', icon: 'fa-flag' },
        { path: '/Polity', label: 'Polity', icon: 'fa-gavel' },
        { path: '/Economy', label: 'Economy', icon: 'fa-dollar-sign' },
        { path: '/Countries', label: 'Countries', icon: 'fa-map-marked-alt' },
        { path: '/Environment', label: 'Environment', icon: 'fa-tree' },
        { path: '/Society', label: 'Society', icon: 'fa-users' },
        { path: '/Business', label: 'Business', icon: 'fa-briefcase' },
        { path: '/Science', label: 'Science', icon: 'fa-flask' },
        { path: '/Sports', label: 'Sports', icon: 'fa-futbol' },
        { path: '/Health', label: 'Health', icon: 'fa-heartbeat' },
        { path: '/Technology', label: 'Technology', icon: 'fa-laptop-code' },
    ];

    return (
        <nav className="flex justify-center bg-gradient-to-r from-lime-400 to-lime-600 shadow-lg rounded-lg p-5 mb-8">
            <div className="flex flex-wrap items-center space-x-6">
                {links.map((link) => (
                    <Link
                        key={link.label}
                        to={link.path}
                        className="text-lg font-semibold text-white transition duration-300 ease-in-out hover:underline hover:underline-offset-4 hover:text-lime-200 transform hover:scale-105 flex items-center"
                    >
                        <i className={`fas ${link.icon} mr-2 text-lime-200 text-base`}></i>
                        <span className="text-base">{link.label}</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default NaviHome;
