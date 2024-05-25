
import { useDispatch } from 'react-redux';
import Table from '../../../components/Table';
import IPOData from '../../../data/IPO/dummy.json';
import { fetchIpos } from '../ipoSlice';
import { columns } from './table/columns';
import { useEffect } from 'react';

const IPOListing = () => {
    const dipatch = useDispatch();

    useEffect(() => {
        dipatch(fetchIpos())
    }, [])

    return (
        <section className='md:mt-12'>
            <Table columns={columns} data={IPOData} />
        </section>
    )
}

export default IPOListing