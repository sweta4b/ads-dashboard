import React, { useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

function Chart({ data }) {
  const groupNames = data.map(({ group }) => group)
  const [selectedChartValue, setSelectedChartValue] = useState('clicks');

  const getGroupMetrics = (groupName) => {
    const groupData = data.filter(({ group }) => group === groupName);
    const totalGroupClicks = groupData.reduce((acc, curr) => acc + curr.clicks, 0);
    const totalGroupCost = groupData.reduce((acc, curr) => acc + curr.cost, 0);
    const totalGroupConversions = groupData.reduce((acc, curr) => acc + curr.conversions, 0);
    const totalGroupRevenue = groupData.reduce((acc, curr) => acc + curr.revenue, 0);

    const percentageOfGroupClicks = (totalGroupClicks / totalClicks) * 100;
    const percentageOfGroupCosts = (totalGroupCost / totalCost) * 100;
    const percentageOfGroupConversions = (totalGroupConversions / totalConevrsions) * 100;
    const percentageOfGroupRevenue = (totalGroupRevenue / totalRevenue) * 100;

    return {
      clicks: percentageOfGroupClicks,
      cost: percentageOfGroupCosts,
      conversions: percentageOfGroupConversions,
      revenue: percentageOfGroupRevenue,
    };
  };

  const getValueForChart = (groupName) => {
    if (selectedChartValue === 'revenue') {
      return getGroupMetrics(groupName).revenue
    } else if (selectedChartValue === 'conversions') {
      return getGroupMetrics(groupName).conversions
    } else if (selectedChartValue === 'cost') {
      return getGroupMetrics(groupName).cost
    } else {
      return getGroupMetrics(groupName).clicks
    }
  }

  const generateChartData = () =>
    groupNames.map((groupName) => ({
      label: `${getValueForChart(groupName).toFixed(2)}% ${groupName}`,
      value: getValueForChart(groupName)
    }));

  const totalClicks = data.reduce((acc, curr) => acc + curr.clicks, 0);
  const totalCost = data.reduce((acc, curr) => acc + curr.cost, 0);
  const totalConevrsions = data.reduce((acc, curr) => acc + curr.conversions, 0);
  const totalRevenue = data.reduce((acc, curr) => acc + curr.revenue, 0);

  const handleChart = (e) => {
    setSelectedChartValue(e.target.value);
  };

  return (
    <div className='w-full h-full bg-white rounded-md '>
      <div className='flex px-4 justify-between items-center py-2 border-b '>
        <h1 className='text-left py-2'>Ad Insights</h1>
        <span className='flex gap-4 items-center justify-center'>
          <select className='px-2 py-2 rounded' onChange={handleChart}>
            <option value="clicks">Clicks</option>
            <option value="cost">Cost</option>
            <option value="conversions">Conversions</option>
            <option value="revenue">Revenue</option>
          </select>
          <i className='fa fa-question-circle-o text-gray-400'></i>
        </span>
      </div>
      <div className='md:w-fit m-auto'>
        <PieChart
          series={[
            {
              data: generateChartData(),
              innerRadius: 60,
              outerRadius: 100,
              paddingAngle: 1,
            }
          ]}
          width={400}
          height={300}
          margin={{ right: 200 }}
        />
      </div>
    </div>
  );
}

export default Chart;
