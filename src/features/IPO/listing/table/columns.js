import { formatToIndianCurrency, formatToIndianCurrencyWithLabel } from '../../../../utils/helpers/currencyFormatter'

export const columns = [
    {
        title: 'Company / Issue date',
        render: (row) => (
            <div class='flex items-center text-sm'>
                <div class='relative w-8 h-8 mr-2 rounded-full md:block'>
                    <img
                        class='object-cover w-full h-full rounded-full'
                        src={row.asset}
                        alt=''
                        loading='lazy'
                    />
                    <div
                        class='absolute inset-0 rounded-full shadow-inner'
                        aria-hidden='true'
                    ></div>
                </div>
                <div>
                    <p class='text-black'>{row.company}</p>
                    <p class='text-gray'>{row.companyInfo.title}</p>
                </div>
            </div>
        ),
    },
    {
        title: 'Issue size',
        accessor: 'issueSize',
        render: ({ min }) => <span className='text-black'>{formatToIndianCurrencyWithLabel(min)}</span>,
    },
    {
        title: 'Price range',
        render: ({ minPrice, maxPrice }) => (
            <span
                className={`px-2 py-1 text-black rounded-sm`}
            >
                {formatToIndianCurrency(minPrice)} - {formatToIndianCurrency(maxPrice)}
            </span>
        ),
    },
    {
        title: 'Min invest/qty', render: ({ minInvestment, lotSize, lotSizeUnit }) => (
            <div
                className={`px-2 py-1 leading-tight rounded-sm`}
            >
                <p className='text-base gap-1 text-black flex flex-col font-semibold'>
                    {formatToIndianCurrency(minInvestment)}
                    <span className='text-gray'>
                        {lotSize} Shared /{lotSizeUnit} Lots
                    </span>
                </p>
            </div>
        ),
    },
]