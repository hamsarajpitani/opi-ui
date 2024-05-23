import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
import styles from './breadcrums.module.css'

const Breadcrumbs = () => {
    const { pathname } = useLocation()
    const routesList = pathname.split('/').filter(Boolean)
    return (
        <div className={styles.breadcrumb}>
            <Link to={'/'} className={styles.breadcrumb__route}>
                Home
            </Link>
            {routesList?.map((route, index) => {
                const isLast = index === routesList.length - 1
                return (
                    <span className={styles.breadcrumb__item}>
                        {isLast ? (
                            <>
                                <MdKeyboardArrowRight className={styles.breadcrumb__icon} />
                                <span className={styles['breadcrumb__route--active']}>{route}</span>
                            </>
                        ) : (
                            <>
                                <MdKeyboardArrowRight className={styles.breadcrumb__icon} />
                                <Link to={route} className={styles.breadcrumb__route}>
                                    {route}
                                </Link>
                            </>
                        )}
                    </span>
                )
            })}
        </div>
    )
}

export default Breadcrumbs
