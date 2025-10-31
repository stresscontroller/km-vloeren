import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    Income: 4000,
    Expenses: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    Income: 3000,
    Expenses: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    Income: 2000,
    Expenses: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    Income: 2780,
    Expenses: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    Income: 1890,
    Expenses: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    Income: 2390,
    Expenses: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    Income: 3490,
    Expenses: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    Income: 4000,
    Expenses: 2400,
    amt: 2400,
  },
  {
    name: 'Sep',
    Income: 3000,
    Expenses: 1398,
    amt: 2210,
  },
  {
    name: 'Oct',
    Income: 2000,
    Expenses: 9800,
    amt: 2290,
  },
  {
    name: 'Nov',
    Income: 2780,
    Expenses: 3908,
    amt: 2000,
  },
  {
    name: 'Dec',
    Income: 2780,
    Expenses: 3908,
    amt: 2000,
  },
];

export default class AccountStatisticChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Expenses" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Income" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
