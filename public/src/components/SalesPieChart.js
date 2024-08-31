import React from 'react'
import {PieChart, Pie, Tooltip, Cell, ResponsiveContainer} from 'recharts'

const data = [
  {name: 'Direct Sales', value: 400},
  {name: 'Channel Sales', value: 300},
  {name: 'Affiliate Sales', value: 300},
  {name: 'Other Sales', value: 200},
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const SalesPieChart = () => {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <PieChart>
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          labelLine={false}
          label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
          outerRadius={100}
          fill='#8884d8'
          dataKey='value'
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default SalesPieChart
