import React from "react";
import Topbar from "../Topbar";
import Sidebar from "../Sidebar";
import Cards from "../Cards";
import Charts from "../Charts";
import Progresscard from "../Progresscard";
import Icons from "../Icons";

import "./index.css";

export default function Home() {
	return (
		<div className="home-container">
			
			<div className="sidebar-container" style={{ background: "#3E4C65" }}>
					<Sidebar />
					

				<div className="header-container">
					<div className="row pl-0 pr-0">
						<div className="col-12 pl-0 pr-0 ">
							<div className="topbar-container">
								<Topbar />
							</div>
						</div>
					</div>

					<div className="card-container">
						<Cards />
					</div>
					<div className="chart-container">
						<Charts />
					</div>
					<div className="progress-container">
						<Progresscard />
					</div>

					<div className="icon-container">
						<Icons />
					</div>
				</div>
			</div>
		</div>
	);
}
