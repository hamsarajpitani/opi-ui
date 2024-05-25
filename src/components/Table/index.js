import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const TableHeader = ({ columns }) => (
    <thead>
        <tr className="select-none text-left text-gray-400 bg-gray-100 capitalize border-gray-600">
            {columns.map((column) => (
                <th key={column.title} className="px-4 py-4 font-medium">
                    {column.title}
                </th>
            ))}
        </tr>
    </thead>
);

const TableRow = ({ row, columns, handleRowClick }) => (
    <tr
        onClick={() => handleRowClick(row.slug)}
        key={row.id}
        className="hover:bg-secondary/20 cursor-pointer"
    >
        {columns.map((column) => {
            const value = column.accessor ? row[column.accessor] : row;
            return (
                <TableColumn key={uuidv4()} value={value} render={column.render} />
            );
        })}
    </tr>
);

const TableColumn = ({ value, render }) => (
    <td className="px-4 py-3 border-b">{render ? render(value) : value}</td>
);


const DataTable = ({ columns, data }) => {
    const navigate = useNavigate();
    const handleRowClick = (slug) => {
        navigate(slug);
    };

    return (
        <section className="mx-auto">
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full overflow-x-auto">
                    <table className="w-full">
                        <TableHeader columns={columns} />
                        <tbody className="bg-white">
                            {data.map((row) => (
                                <TableRow
                                    key={row.id}
                                    row={row}
                                    columns={columns}
                                    handleRowClick={handleRowClick}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default DataTable;