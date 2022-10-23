import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import {
	AppstoreOutlined,
	ContainerOutlined,
	DesktopOutlined,
	MailOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";

import DashboardIcon from "@mui/icons-material/Dashboard";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import { TiPencil } from "react-icons/ti";
import { BiHash } from "react-icons/bi";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import PieChartRoundedIcon from "@mui/icons-material/PieChartRounded";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import GradientSharpIcon from "@mui/icons-material/GradientSharp";
import CopyrightIcon from "@mui/icons-material/Copyright";

function getItem(label, key, icon, children, type) {
	return {
		key,
		icon,
		children,
		label,
		type,
		style: {
			background: "#3E4C65",
			color: "white",
			margin: 0,
		},
	};
}

const items = [
	getItem("Dashboard", "1", <DashboardIcon />),
	getItem("InvertColors", "2", <InvertColorsIcon />),
	getItem("TiPencil", "3", <TiPencil />),

	getItem("COMPONENTS ", "sub1", <MailOutlined />, [
		getItem("BiHash", "5", <BiHash />),
		getItem("RadioButtonChecked", "6", <RadioButtonCheckedIcon />),
		getItem("PieChartRounded ", "7", <PieChartRoundedIcon />),
		getItem("ListAlt", "8", <ListAltOutlinedIcon />),
	]),

	getItem("EXTRAS", "sub2", <AppstoreOutlined />, [
		getItem("NotificationsNone", "9", <NotificationsNoneOutlinedIcon />),
		getItem("Widgets", "10", <WidgetsOutlinedIcon />),
		getItem("StarOutline ", "11", <StarOutlineOutlinedIcon />),
		getItem("Description", "12", <DescriptionOutlinedIcon />),
		getItem("StarOutline ", "13", <StarOutlineOutlinedIcon />),
		getItem("Description", "14", <DescriptionOutlinedIcon />),
	]),
];

const Sidebar = () => {
	const [collapsed, setCollapsed] = useState(true);

	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};

	return (
		<div>
			<div className="ml-1 mr-1">
				<div className="col-12 pl-0 pr-0">
					<div
						className="side-bar"
						style={{
							background: "#3E4C65",
							// margin: 0,
							// padding: 0,
							
							alignItems: "flex-end",
							
						}}
					>
 						
						
							
						<Button
							onClick={toggleCollapsed}
							style={{
								marginBottom: 16,
								
								
								// background: "#3E4C65",
								justifyContent: "flex-end",
								
								marginLeft: collapsed ? "25px" : "220px",
							}}
						>
							{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
						</Button>

						<Menu
							defaultSelectedKeys={["1"]}
							defaultOpenKeys={["sub1"]}
							mode="inline"
							// theme="light"
							inlineCollapsed={collapsed}
							items={items}
							style={{
								background: "#3E4C65",
								margin: 0,
								fontWeight: "500px",
								
								width:collapsed ? "80px" : "180px"
							
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
