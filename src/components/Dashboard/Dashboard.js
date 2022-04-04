import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const Dashboard = () => {
    const data =
        [
            {
                "month": "Mar",
                "investment": 100000,
                "sell": 241,
                "revenue": 10401
            },
            {
                "month": "Apr",
                "investment": 120000,
                "sell": 423,
                "revenue": 24500
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
                "revenue": 61000
            },
            {
                "month": "Sep",
                "investment": 50000,
                "sell": 670,
                "revenue": 150000
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
<h2>MONTH VS REVENUE BAR CHART</h2> <hr />

            <BarChart
                width={800}
                height={500}
                data={data}
                margin={{
                    top: 20,
                    right: 10,
                    left: 100,
                    bottom: 5,
                }}
                padding={
                    {
                        right: 15,
                        bottom: 10,
                        left: 30,
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
                <Bar dataKey={"investment"} fill='#8884d8' ></Bar>

                <Bar dataKey="revenue" fill='#82ca9d'></Bar>
            </BarChart>

<h2>MONTH VS REVENUE AREA CHART</h2>
            <AreaChart
                width={800}
                height={500}
                data={data}
                margin={{
                    top: 30,
                    right: 10,
                    left: 100,
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
                    dataKey="investment"
                    stackId="1"
                    stroke="#8884d8"
                    fill="#8884d8"
                ></Area>
                <Area
                    type="monotone"
                    dataKey="revenue"
                    stackId="1"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                ></Area>
            </AreaChart>


        </div>

    );
};




export default Dashboard;