import React, { useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import TableChartIcon from '@mui/icons-material/TableChart';



function Chart({ data, showChart, setShowChart }) {
    const groupNames = data.map(({group}) => group)
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
     if(selectedChartValue === 'revenue'){
       return getGroupMetrics(groupName).revenue
     }else if(selectedChartValue === 'conversions'){
        return getGroupMetrics(groupName).conversions
     }else if(selectedChartValue === 'cost'){
        return getGroupMetrics(groupName).cost
     }else{
        return getGroupMetrics(groupName).clicks
     }
  }

  const generateChartData = () =>
    groupNames.map((groupName) => ({
      label: `${getValueForChart(groupName).toFixed(2)}% ${groupName}` ,
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
      margin={{right:200}}
    />
      </div>
      <div className=' justify-end relative items-center flex'>
      <span className='absolute  bg-gray-100 border rounded-md right-2 cursor-pointer' ><DonutLargeIcon onClick={() => setShowChart(!showChart)} className={showChart && 'bg-blue-400'}/> <TableChartIcon onClick={() => setShowChart(!showChart)} className={!showChart && 'bg-blue-400'}/></span>
            </div>
    </div>
  );
}

export default Chart;


// function Chart({data}) {
//     const [selectedChartValue, setSelectedChartValue] = useState('clicks')

//     const totalClicks = data.reduce((acc, curr) => acc + curr.clicks, 0);
//     const totalCost = data.reduce((acc, curr) => acc + curr.cost, 0);
//     const totalConevrsions = data.reduce((acc, curr) => acc + curr.conversions, 0)
//     const totalRevenue = data.reduce((acc, curr) => acc + curr.revenue, 0)

//     const femaleClicks = data.filter(({group}) => group === "Female").reduce((acc,curr) => acc + curr.clicks,0)
//     const femaleCost = data.filter(({group}) => group === "Female").reduce((acc,curr) => acc + curr.cost,0)
//     const femaleConversions = data.filter(({group}) => group === "Female").reduce((acc,curr) => acc + curr.conversions,0)
//     const femaleRevenue = data.filter(({group}) => group === "Female").reduce((acc,curr) => acc + curr.revenue,0)

//     const percentageOfFemaleClicks = (femaleClicks/totalClicks * 100)
//     const percentageOfFemaleCosts = (femaleCost/totalCost * 100)
//     const percentageOfFemaleConversions = (femaleConversions/totalConevrsions * 100)
//     const percentageOfFemaleRevenue = (femaleRevenue/totalRevenue * 100)
    

//     const maleClicks = data.filter(({group}) => group === "Male").reduce((acc,curr) => acc + curr.clicks,0)
//     const maleCost = data.filter(({group}) => group === "Male").reduce((acc,curr) => acc + curr.cost,0)
//     const maleConversions = data.filter(({group}) => group === "Male").reduce((acc,curr) => acc + curr.conversions,0)
//     const maleRevenue = data.filter(({group}) => group === "Male").reduce((acc,curr) => acc + curr.revenue,0)
    

//     const percentageOfMaleClicks = (maleClicks/totalClicks * 100)
//     const percentageOfMaleCosts = (maleCost/totalCost * 100)
//     const percentageOfMaleConversions = (maleConversions/totalConevrsions * 100)
//     const percentageOfMaleRevenue = (maleRevenue/totalRevenue * 100)
    

//     const unknownClicks = data.filter(({group}) => group === "Unknown").reduce((acc,curr) => acc + curr.clicks,0)
//     const unknownCost = data.filter(({group}) => group === "Unknown").reduce((acc,curr) => acc + curr.cost,0)
//     const unknownConversions = data.filter(({group}) => group === "Unknown").reduce((acc,curr) => acc + curr.conversions,0)
//     const unknownRevenue = data.filter(({group}) => group === "Unknown").reduce((acc,curr) => acc + curr.revenue,0)
    

//     const percentageOfUnknownClicks = (unknownClicks/totalClicks * 100)
//     const percentageOfUnknownCosts = (unknownCost/totalCost * 100)
//     const percentageOfUnknownConversions = (unknownConversions/totalConevrsions * 100)
//     const percentageOfUnknownRevenue = (unknownRevenue/totalRevenue * 100)
   

//     const handleChart = (e) =>{
//         setSelectedChartValue(e.target.value)
//     }

//     console.log(selectedChartValue)

    
//   return (

//     <div >
//         <select onChange={handleChart}>
//             <option value="clicks">Clicks</option>
//             <option value="cost">Cost</option>
//             <option value="conversions">Conversions</option>
//             <option value="revenue">Revenue</option>
//         </select>
//         <DonutChart
//   data={[
//     {
//       label: 'Female',
//       value: selectedChartValue === 'revenue' ? percentageOfFemaleRevenue : selectedChartValue === 'conversions' ? percentageOfFemaleConversions : selectedChartValue === 'cost' ? percentageOfFemaleCosts : percentageOfFemaleClicks
//     },
//     {
//       label: 'Male',
//       value: selectedChartValue === 'revenue' ? percentageOfMaleRevenue : selectedChartValue === 'conversions' ? percentageOfMaleConversions : selectedChartValue === 'cost' ? percentageOfMaleCosts : percentageOfMaleClicks
//     },
//     {
//         label: 'Unknown',
//         value: selectedChartValue === 'revenue' ? percentageOfUnknownRevenue : selectedChartValue === 'conversions' ? percentageOfUnknownConversions : selectedChartValue === 'cost' ? percentageOfUnknownCosts : percentageOfUnknownClicks
//       },
//   ]}
// />
//     </div>
//   )
// }

// export default Chart