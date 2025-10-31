import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '1',
    uv: 400,
    pv: 240,
    amt: 240,
  },
  {
    name: '2',
    uv: 300,
    pv: 139,
    amt: 221,
  },
  {
    name: '3',
    uv: 200,
    pv: 980,
    amt: 229,
  },
  {
    name: '4',
    uv: 278,
    pv: 390,
    amt: 200,
  },
  {
    name: '5',
    uv: 189,
    pv: 480,
    amt: 218,
  },
  {
    name: '6',
    uv: 239,
    pv: 380,
    amt: 250,
  },
  {
    name: '7',
    uv: 349,
    pv: 430,
    amt: 210,
  },
  {
    name: '8',
    uv: 300,
    pv: 139,
    amt: 221,
  },
  {
    name: '9',
    uv: 200,
    pv: 980,
    amt: 229,
  },
  {
    name: '10',
    uv: 278,
    pv: 390,
    amt: 200,
  },
];

export default class ExperianChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/simple-area-chart-4y9cnl';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={400}
          height={250}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
