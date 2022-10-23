import React from "react";
import { useState } from "react";
import "./index.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { BiSearch } from "react-icons/bi";

const Topbar = () => {
	return (
		<div className="topbar">
			<div className="topbarwrapper">
				<div className="topleft">
					<nav className="navbar navbar-expand-lg navbar-light bg-white">
					<div className="icon">
							<CopyrightIcon />
							<span>COREui</span>
						</div>
						<button
							class="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNavAltMarkup"
							aria-controls="navbarNavAltMarkup"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon"></span>
						</button>

						
						<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
							<div class="navbar-nav ml-auto">
								<a class="nav-link" href="#">
									Dashboard
								</a>
								<a class="nav-link" href="#">
									Users
								</a>
								<a class="nav-link" href="#">
									Settings
								</a>
							</div>
						</div>
					</nav>
					<div className="form-control">
						<p> Search.....</p>
						<div className="form-icon">
							<BiSearch />
						</div>

						{/* <input type="text" placeholder="Search.." name="search"/> */}
					</div>
				</div>

				<div className="topright">
					<div className="topbarIconscontainer">
						<NotificationsNone />
						{/* <span className="topIconBadge">3</span> */}
					</div>

					<div className="topbarIconscontainer">
						<Language />
						{/* <span className="topIconBadge">2</span> */}
					</div>

					<div className="topbarIconscontainer">
						<Settings />
						{/* <span className="topIconBadge">1</span> */}
					</div>

					<img
						src="data:image/jpeg;base64,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"
						alt=""
						className="topavatar"
					></img>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
