import React from 'react'
import Table from '../../../components/Table';
import IPOData from '../../../data/IPO/dummy.json';
import { columns } from './table/columns';

const IPOListing = () => {
    return (
        <section className='md:mt-12'>
            <Table columns={columns} data={IPOData} />
        </section>
    )
}

export default IPOListing