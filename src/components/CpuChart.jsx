import React from 'react'
import './CpuChart.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export default function CpuChart({data}) {
 

    const transformedArray = data.map(([time, count]) => ({
        time:`${time}second`,
        count,
      }));

     
 
  return (
    <div className='chart-wrapper'>
    <ResponsiveContainer width="100%"  height={550}>
    <AreaChart data={transformedArray}>
          <XAxis dataKey='time' />
          <YAxis domain={[0, 100]} allowDataOverflow ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="count"
            stackId="1"
            stroke="#F84AD0"
            fill="#F84AD0"
          />
        </AreaChart>
      </ResponsiveContainer>
      </div>
  )
}
