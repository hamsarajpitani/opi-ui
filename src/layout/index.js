
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='p-4 md:p-12'>
            <Outlet />
        </div>
    )
}

export default Layout