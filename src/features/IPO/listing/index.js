
import { useSelector } from 'react-redux';
import Table from 'components/Table';
import { columns } from './columns';

const IPOListing = () => {
    const { Ipos } = useSelector(state => state.ipoState);

    return (
        <section>
            <Table columns={columns} data={Ipos} />
        </section>
    )
}

export default IPOListing