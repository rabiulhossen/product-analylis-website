import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import { AreaChart, Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


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
                "investment": 200000,
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
                "investment": 500000,
                "sell": 529,
                "revenue": 40405
            },
            {
                "month": "Jul",
                "investment": 600000,
                "sell": 601,
                "revenue": 50900
            },
            {
                "month": "Aug",
                "investment": 700000,
                "sell": 670,
                "revenue": 61000
            }
        ];



    return (

<div>


        <BarChart
            width={700}
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
                    left:30,
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


        </div>

    );
};




export default Dashboard;