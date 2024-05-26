
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='p-4 md:w-9/12 m-auto'>
            <Outlet />
        </div>
    )
}

export default Layout