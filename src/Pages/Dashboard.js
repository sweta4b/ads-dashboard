import React from 'react'
import { ChartTable, Table } from '../Components'
import { chartDataTable, dummyData } from '../data'

function Dashboard() {
    
    return (
        <div className=' w-full'>
            <div className='md:max-w-[1480px] max-w-[600px]  m-auto w-full flex justify-between items-center '>
                <div className='grid md:grid-cols-2 w-full gap-8 md:px-4 py-4'>
                    <div>
                        <Table data={dummyData} />
                    </div>
                    <div className='w-full' >
                        <ChartTable data={chartDataTable}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard