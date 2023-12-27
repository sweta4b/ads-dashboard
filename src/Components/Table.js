import React, { useState } from 'react';


function Table({ data }) {
    const [sortOrder, setSortOrder] = useState('ascending');
    const [sortBy, setSortBy] = useState('');

    const totalClicks = data.reduce((acc, curr) => acc + curr.clicks, 0);
    const totalCost = data.reduce((acc, curr) => acc + curr.cost, 0);
    const totalConversions = data.reduce((acc, curr) => acc + curr.conversions, 0);
    const totalRevenue = data.reduce((acc, curr) => acc + curr.revenue, 0);

    const sortedData = [...data].sort((a, b) => {
        const order = sortOrder === 'ascending' ? 1 : -1;
        return order * (a[sortBy] - b[sortBy]);
    });

    const handleSort = (property) => {
        if (sortBy === property) {
            // Toggle sorting order
            setSortOrder((prevSortOrder) =>
                prevSortOrder === 'ascending' ? 'descending' : 'ascending'
            );
        } else {
            // Set new property and default to ascending order
            setSortBy(property);
            setSortOrder('ascending');
        }
    };

    const getSortIcon = (property) => {
        if (sortBy === property) {
            return sortOrder === 'ascending' ? (
                <i className='fa fa-sort-asc'></i>
            ) : (
                <i className='fa fa-sort-desc'></i>
            )
        }else{
            return <i className='fa fa-unsorted text-gray-200'></i>
        }
        return null;
    };

    return (
        <div>
            <div className='border-2 bg-white rounded-md text-xs md:text-sm '>
                <div className='flex px-4 justify-between items-center py-2 border-b '>
                    <h1 className='text-left py-2 font-semibold'>Ad Insights</h1>
                    <i className='fa fa-question-circle-o text-gray-400'></i>
                </div>
                <table className='text-right leading-10 w-full'>
                    <thead>
                        <tr className='border-b text-sm leading-10 '>
                            <th
                                className='font-semibold px-4 cursor-pointer text-left'
                                onClick={() => handleSort('campaigns')}
                            >
                                Campaigns {getSortIcon('campaigns')}
                            </th>
                            <th
                                className='font-semibold cursor-pointer '
                                onClick={() => handleSort('clicks')}
                            >
                                Clicks {getSortIcon('clicks')}
                            </th>
                            <th
                                className='font-semibold cursor-pointer'
                                onClick={() => handleSort('cost')}
                            >
                                Cost {getSortIcon('cost')}
                            </th>
                            <th
                                className='font-semibold cursor-pointer'
                                onClick={() => handleSort('conversions')}
                            >
                                Conversions {getSortIcon('conversions')}
                            </th>
                            <th
                                className='font-semibold cursor-pointer pr-4'
                                onClick={() => handleSort('revenue')}
                            >
                                Revenue {getSortIcon('revenue')}
                            </th>
                        </tr>
                    </thead>
                    <tbody className='text-gray-600'>
                        {sortedData.map((data, index) => (
                            <tr key={index} className='border-b px-4 '>
                                <td className='px-4 text-left'>{data.campaigns}</td>
                                <td>{data.clicks.toLocaleString()}</td>
                                <td>USD {data.cost.toLocaleString()}</td>
                                <td>{data.conversions}</td>
                                <td className='pr-4'>USD {data.revenue.toLocaleString()}</td>
                            </tr>
                        ))}
                        <tr className='bg-gray-100 text-right'>
                            <td className='px-4 text-left'>Total</td>
                            <td>{totalClicks.toLocaleString()}</td>
                            <td>USD {totalCost.toLocaleString()}</td>
                            <td>{totalConversions.toLocaleString()}</td>
                            <td className='pr-4'>USD {totalRevenue.toLocaleString()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;
