import { IoLogoFacebook } from "react-icons/io";
import { TbBrandTwitter } from "react-icons/tb";
import { AiOutlineLinkedin } from "react-icons/ai";


import "./index.css";

export default function Icons() {
   
	return (
		<div
			className="row"
		>
            <div className="col-12 col-md-6 col-lg-4 mr-0 ml-0 p-0">
                <div className="m-1 icon-name">
                    <IoLogoFacebook color="white" />
                </div>
			</div>

            <div className="col-12 col-md-6 col-lg-4 mr-0 ml-0 p-0">
                <div className="m-1 icon-name2">
                    <TbBrandTwitter color="white" />
                </div>
			</div>

            <div className="col-12 col-md-6 col-lg-4 mr-0 ml-0 p-0">
                <div className="m-1 icon-name3">
                    <AiOutlineLinkedin color="white" />
                </div>
			</div>
		</div>
	);
}
