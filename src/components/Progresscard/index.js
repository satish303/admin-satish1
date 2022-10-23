import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Progress } from "antd";
import { style } from "@mui/system";

const App = () => (
	<div className="row">
		<div className="col-12 col-md-6 col-lg-2 mr-0 ml-0 p-0">
			<div className="m-1 progress-items1">
				<span className="progress-name">Visits</span>
				<pre></pre>
				<span className="progress-rate">29.703 Users (40%)</span>

				<pre></pre>
				<div className="progress-per">
				<Progress
      strokeColor={{
         '0%': 'rgb(92,173,117)',
         '100%': 'rgb(92,173,117)',
      }}
      percent={40} showInfo={false}
    />
				</div>
			</div>
		</div>

		<div className="col-12 col-md-6 col-lg-2 mr-0 ml-0 p-0">
			<div className="m-1 progress-items2">
				<span className="progress-name">Unique</span>
				<pre></pre>
				<span className="progress-rate">24.093 Users (20%)</span>
				<pre></pre>
				<div className="progress-per">
					<Progress percent={20} showInfo={false} />
				</div>
			</div>
		</div>

		<div className="col-12 col-md-6 col-lg-2 mr-0 ml-0 p-0">
			<div className="m-1 progress-items3">
				<span className="progress-name">PageViews</span>
				<pre></pre>
				<span className="progress-rate">78.706 Views (60%)</span>

				<pre></pre>
				<div className="progress-per">
				
				<Progress
      strokeColor={{
         '0%': '#DFB855',
         '100%': '#DFB855',
      }}
      percent={60} showInfo={false}
    /> 
					
				</div>
			</div>
		</div>

		<div className="col-12 col-md-6 col-lg-2 mr-0 ml-0 p-0">
			<div className="m-1 progress-items4">
				<span className="progress-name">New Users</span>
				<pre></pre>

				<span className="progress-rate">22.123 Users(80%)</span>

				<pre></pre>
				<div className="progress-per">
				<Progress
      strokeColor={{
         '0%': '#B66562',
         '100%': '#B66562',
      }}
      percent={80} showInfo={false}
    /> 
				</div>
			</div>
		</div>

		<div className="col-12 col-md-6 col-lg-2 mr-0 ml-0 p-0">
			<div className="m-1 progress-items5">
				<span className="progress-name">Bounce Rate</span>
				<pre></pre>
				<span className="progress-rate">40.15%</span>

				<pre></pre>
				<div className="progress-per">
				<Progress
      strokeColor={{
         '0%': '#4737AA',
         '100%': '#4737AA',
      }}
      percent={40} showInfo={false}
    /> 
				</div>
			</div>
		</div>
	</div>
);

export default App;
