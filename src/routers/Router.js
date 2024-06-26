import Layout from 'layout';
import Detail from 'pages/Detail';
import Home from 'pages/Home';
import { Routes, Route } from 'react-router-dom';


const Routers = () => {
    function NoMatch() {
        return <h1>404: Not Found</h1>;
    }

    return (
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="/:slug" element={<Detail />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    );
};

export default Routers;
