import dayjs from 'dayjs';
import { formatToIndianCurrency, formatToIndianCurrencyWithLabel } from 'utils/helpers/currencyFormatter';
import TextContainer from '../components/TextContainer';
dayjs.extend(require('dayjs/plugin/advancedFormat'));

export const columns = [
    {
        title: 'Company / Issue date',
        render: (row) => {
            const { company, issueStartDate, issueEndDate } = row;
            let issueDateText = '';
            if (!issueStartDate || !issueEndDate) {
                issueDateText = 'To be announced'
            } else {
                const startDate = dayjs(issueStartDate);
                const endDate = dayjs(issueEndDate);
                const isSameMonth = startDate.month() === endDate.month();
                issueDateText = `${dayjs(issueStartDate).format(isSameMonth ? 'Do' : 'Do MMM')} - ${dayjs(issueEndDate).format('Do MMM YYYY')}`
            }
            return <div class='flex items-center'>
                <img
                    class='object-cover w-8 h-8 mr-2 rounded-full'
                    src={row.asset}
                    alt={company}
                    loading='lazy'
                />
                <TextContainer title={company} desc={issueDateText} />
            </div>
        },
    },
    {
        title: 'Issue size',
        accessor: 'issueSize',
        render: ({ min }) =>
            <TextContainer title={formatToIndianCurrencyWithLabel({ number: min })} />
    },
    {
        title: 'Price range',
        render: ({ minPrice, maxPrice }) => (
            <TextContainer title={`${formatToIndianCurrency({ number: minPrice })} - ${formatToIndianCurrency({ number: maxPrice })}`} />
        ),
    },
    {
        title: 'Min invest/qty', render: ({ minInvestment, lotSize, lotSizeUnit }) => (
            <TextContainer className="text-center" title={formatToIndianCurrency({ number: minInvestment })} desc={`${lotSize} Shared /${lotSizeUnit} Lots}`} />
        ),
    },
]