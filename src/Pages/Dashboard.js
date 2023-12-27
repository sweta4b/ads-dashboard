import React from 'react'
import { ChartTable, Table } from '../Components'
import { chartDataTable, dummyData } from '../data'

function Dashboard() {
    
    return (
        <div >
            <div className='md:max-w-[1480px] max-w-[600px]   m-auto w-full flex justify-between items-center '>
                <div className='grid md:grid-cols-2 w-full gap-8 md:px-4 py-4'>
                    <div className='w-full max-h-96 '>
                        <Table data={dummyData} />
                    </div>
                    <div className='w-full max-h-96 ' >
                        <ChartTable data={chartDataTable}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard