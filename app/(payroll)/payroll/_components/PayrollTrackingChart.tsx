import React from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
    { name: "Title 1", value: 400, color: "#4285F4" },
    { name: "Title 2", value: 300, color: "#34A853" },
    { name: "Title 3", value: 300, color: "#FBBC05" },
    { name: "Title 4", value: 200, color: "#EA4335" },
    { name: "Title 5", value: 278, color: "#FF9900" },
    { name: "Title 6", value: 189, color: "#8E44AD" },
  ];
  
  const COLORS = data.map((entry) => entry.color);
  
  const PayrollTrackingChartCard = () => {
    return (
        <div className="p-4 h-[29rem] border border-neutral shadow-gray-150 shadow-xl rounded-lg bg-white  mt-6">
            <h2 className="text-md ml-2 mt-4 mb-4">Payroll Tracking Charts</h2>

            <div className="flex">
                <div className="flex-1 mr-16">
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={55}
                                outerRadius={70}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <text
                                x="40%"
                                y="45%"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                style={{ fontSize: "10px"}}
                                >
                                Facibus libero
                            </text>
                            <text
                                x="40%"
                                y="55%"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                style={{ fontSize: "20px", fontWeight: "bold"}}
                                >
                                400
                            </text>
                            <Legend
                                align="right"
                                verticalAlign="middle"
                                layout="vertical"
                                iconType="circle"
                                iconSize={10}
                                formatter={(value, entry) => <span style={{ fontSize: '12px' }}>{value}</span>}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <p className="text-gray-500 mt-4 text-xs ml-2 leading-6">
                Ut enim morbi duis diam sed malesuada. Eu pharetra vulputate erat cursus nulla tempus sagittis neque.
            </p>
            <p className="text-gray-500 mt-3 text-xs ml-2 leading-6">
                Convallis habitasse dolor non sed semper condimentum. Neque facilisis feugiat consectetur vel in nunc. Pulvinar integer in feugiat nullam facilisi.
            </p>
        </div>
    );
  };

export default PayrollTrackingChartCard;