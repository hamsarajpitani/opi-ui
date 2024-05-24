import React from 'react';
import { Link, useLocation, useMatches } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';

const BreadcrumLink = ({ route }) => {
    return (
        <span key={route} className="flex items-center">
            <MdKeyboardArrowRight className="mx-1" size={21} />
            <Link to={route}>
                {decodeURIComponent(route)}
            </Link>
        </span>
    )
}

const Breadcrumbs = () => {
    const { pathname } = useLocation();
    const routesList = pathname.split('/').filter(Boolean);
    return (
        <div className="flex items-center  text-secondary text-base">
            <Link to={'/'}>
                Home
            </Link>
            {routesList?.map((route, index) => {
                return (
                    <BreadcrumLink route={route} />
                );
            })}
        </div>
    );
};

export default Breadcrumbs;
