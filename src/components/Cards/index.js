import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./index.css";
import { HiDotsVertical } from "react-icons/hi";
import FirstImage from "../../Asets/Images/firstImage.png";
import LineImage1 from "../../Asets/Images/lineImage1.png";
import LineImage2 from "../../Asets/Images/lineImage2.png";
import LineImage3 from "../../Asets/Images/lineImage3.png";

export default function index() {
	return (
		<div className=" ">
			{/* <div className="bar">Home / dashboard </div> */}
			<br></br>

			<div className="row">
				<div className="col-11 col-md-6 col-lg-3  mr-0 ml-0 mb-3 p-2">
					<div className="card-Item">
						<div className="card-topleft">
							<span className="card-money">26K</span>
							<span className="money-rate">
								(-12.4% <ArrowDownwardIcon />)<br></br>
								<span className="card-tittle">Users</span>
							</span>
							<div className="card-bg-img card1"></div>
						</div>

						<div className="card-topright">
							<div className="HiOutlineDotsVertical">
								<HiDotsVertical style={{ color: "white" }} />
							</div>
						</div>
					</div>
				</div>

				<div className="col-11 col-md-6 col-lg-3 mr-0 ml-0 mb-3 p-2">
					<div className="card-Item">
						<div className="card-topleft">
							<span className="card-money">$6.200</span>
							<span className="money-rate">
								(40.9% <ArrowUpwardIcon />)<br></br>
								<span className="card-tittle">Income</span>
							</span>
							<div className="card-bg-img card2"></div>
						</div>
						<div className="card-topright">
							<div className="HiOutlineDotsVertical">
								<HiDotsVertical style={{ color: "white" }} />
							</div>
						</div>
					</div>
				</div>

				<div className="col-11 col-md-6 col-lg-3  mr-0 ml-0 mb-3 p-2">
					<div className="card-Item">
						<div className="card-topleft">
							<span className="card-money">2.49%</span>
							<span className="money-rate">
								(84.7% <ArrowUpwardIcon />)<br></br>
								<span className="card-tittle">Conversion Rate</span>
							</span>
							<div className="card-bg-img card3"></div>
						</div>
						<div className="card-topright">
							<div className="HiOutlineDotsVertical">
								<HiDotsVertical style={{ color: "white" }} />
							</div>
						</div>
					</div>
				</div>

				<div className="col-11 col-md-6 col-lg-3  mr-0 ml-0 mb-3 p-2">
					<div className="card-Item">
						<div className="card-topleft">
							<span className="card-money">44K</span>
							<span className="money-rate">
								(-23.6% <ArrowDownwardIcon />)<br></br>
								<span className="card-tittle">Sessions</span>
							</span>
							<div className="card-bg-img card4"></div>
						</div>
						<div className="card-topright">
							<div className="HiOutlineDotsVertical">
								<HiDotsVertical style={{ color: "white" }} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
