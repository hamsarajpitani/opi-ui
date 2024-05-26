
import IPOListing from '../../features/IPO/listing'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchIpos } from '../../features/IPO/ipoSlice';

const Home = () => {
    const dipatch = useDispatch();

    useEffect(() => {
        dipatch(fetchIpos())
    }, [])

    return (
        <div>
            <IPOListing />
        </div>
    )
}

export default Home
