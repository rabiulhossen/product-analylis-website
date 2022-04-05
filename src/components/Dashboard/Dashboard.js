import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'


const Dashboard = () => {
    const data =
        [
            {
                "month": "Mar",
                "investment": 300000,
                "sell": 241,
                "revenue": 200401
            },
            {
                "month": "Apr",
                "investment": 400000,
                "sell": 423,
                "revenue": 245000
            },
            {
                "month": "May",
                "investment": 500000,
                "sell": 726,
                "revenue": 67010
            },
            {
                "month": "Jun",
                "investment": 700000,
                "sell": 529,
                "revenue": 404005
            },
            {
                "month": "Jul",
                "investment": 800500,
                "sell": 601,
                "revenue": 500900
            },
            {
                "month": "Aug",
                "investment": 700000,
                "sell": 670,
                "revenue": 800000
            },
            {
                "month": "Sep",
                "investment": 500000,
                "sell": 670,
                "revenue": 700000
            },
            {
                "month": "Oct",
                "investment": 600000,
                "sell": 670,
                "revenue": 400000
            }
        ];



    return (

        <div className='chart-container'>
<h2 className='heading'>MONTH vs REVENUE BAR CHART</h2> <hr className='underline'  />

            <BarChart
                width={800}
                height={500}
                data={data}
                margin={{
                    top: 20,
                    right: 10,
                    left: 60,
                    bottom: 5,
                }}
                padding={
                    {
                        right: 15,
                        bottom: 10,
                        left: 20,
                    }
                }

            >


                <CartesianGrid
                    strokeDasharray="3 3"
                ></CartesianGrid>
                <XAxis dataKey="month"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Bar dataKey={"investment"} fill='#F97F51' ></Bar>

                <Bar dataKey="revenue" fill='#fff200'></Bar>
                <Bar dataKey="sell" fill='#FC427B'></Bar>
            </BarChart>

<h2 className='heading'>MONTH VS REVENUE AREA CHART</h2> 
<hr className='underline'  />
            <AreaChart
                width={800}
                height={500}
                data={data}
                margin={{
                    top: 30,
                    right: 10,
                    left: 60,
                    bottom: 5,
                }}
                padding={
                    {
                        right: 15,
                        bottom: 10,
                        left: 30,
                    }}
            >
                <CartesianGrid
                    strokeDasharray="3 3"
                ></CartesianGrid>
                <XAxis dataKey="month"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                
                <Area
                    type="monotone"
                    dataKey="revenue"
                    stackId="1"
                    stroke="#1B9CFC"
                    fill="#26de81"
                ></Area>
                <Area
                    type="monotone"
                    dataKey="investment"
                    stackId="1"
                    stroke="#25CCF7"
                    fill="#fa8231"
                ></Area>
                <Area
                    type="monotone"
                    dataKey="sell"
                    stackId="1"
                    stroke="#0abde3"
                    fill="#ff6b6b"
                ></Area>

            </AreaChart>


        </div>

    );
};




export default Dashboard;