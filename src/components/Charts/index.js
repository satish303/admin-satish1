import React, { PureComponent } from "react";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import "./index.css";

import "antd/dist/antd.css";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import Moment from "moment";

const data = [
	{
		name: "January01",
		uv: 4000,
		pv: -1000,
		amt: 2400,
	},
	{
		name: "February",
		uv: 1000,
		pv: -2500,
		amt: 2210,
	},
	{
		name: "March",
		uv: 3000,
		pv: -1000,
		amt: 2290,
	},
	{
		name: "April",
		uv: 2000,
		pv: 3908,
		amt: 2000,
	},
	{
		name: "May",
		uv: 1000,
		pv: -2000,
		amt: 2181,
	},
	{
		name: "June",
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: "July",
		uv: 5500,
		pv: 3800,
		amt: 2100,
	},
	{
		name: "Augest",
		uv: 3490,
		pv: -2000,
		amt: 1900,
	},
	{
		name: "September",
		uv: -4490,
		pv: 5000,
		amt: 4900,
	},
];

export default class Example extends PureComponent {
	static demoUrl = "https://codesandbox.io/s/stacked-area-chart-ix341";

	render() {
		
		return (
			<div className="icon-row ">
				<div style={{ width: "95%" }}>
					
					
						<div className="chart-header">
							<div className="chart-topleft">
								<div className="chart-name"> Traffic</div>
								<span className="chart-subname"> January-September-2022 </span>
							</div>
						

						
							<div className="chart-topright">
								<div className="dateformate">
									<div>Day</div>
								<div className="month-word">Month</div>
								<div>Year</div>

									
								</div>
								<div className="date-icon">
									<FaCanadianMapleLeaf />
								</div>
							</div>
						</div>
					

					<ResponsiveContainer width="100%" height="88%">
						<AreaChart
							width={300}
							height={400}
							data={data}
							margin={{
								top: 10,
								right: 0,
								left: 0,
								bottom: 0,
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Area
								type="monotone"
								dataKey="uv"
								stackId="1"
								stroke="green"
								fill=" white "
							/>
							<Area
								type="monotone"
								dataKey="pv"
								stackId="1"
								stroke="#94B8CF"
								fill="#E9E9E9"
							/>
							{/* <Area type="monotone" dataKey="amt" stackId="1" stroke="" fill="" /> */}
						</AreaChart>
					</ResponsiveContainer>
				</div>
			</div>
		);
	}
}
