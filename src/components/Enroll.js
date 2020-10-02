import React, {Component} from 'react';
import EnrollImg from "../enroll.png";
import {Link} from "react-router-dom";

class Enroll extends Component {
	render() {
		return (
			<div>
				<div className={"enroll-section row mb-5"}>
					<div className="col-lg-6">
						<img src={EnrollImg} alt={"Enroll"} className={"img-fluid"}/>
					</div>
					<div className="col-lg-6 content">
						<span className={"greetings"}>ALOHA</span>
						<h1>YOUR STORE Enrollment</h1>
						<p>Please click the Green button below to <b>Learn More and Sign Up</b> for the Brand New "Shop
							On Kauai" Marketplace...</p>
						<Link className={"btn btn-success btn-lg"} to={"/enroll-form"}>SIGN UP</Link>

					</div>

					<div className={"col-lg-12 downloads"}>
						<h1 className={"home-title"}>DOWNLOADS</h1>
						<span className={"download-section"}>
							<a className={"download-link"} href={"https://img1.wsimg.com/blobby/go/a0e27fdd-b22c-41d8-9f6c-825b2d9a604f/downloads/Shop%20on%20Kauai%208%20page%209-14%20Final.pdf?ver=1601612092366"}>
								Shop on Kauai 8 page 9-14 Final (pdf)
							</a>
							<a className={"download-link-right float-right"} href={"https://img1.wsimg.com/blobby/go/a0e27fdd-b22c-41d8-9f6c-825b2d9a604f/downloads/Shop%20on%20Kauai%208%20page%209-14%20Final.pdf?ver=1601612092366"}>
								<i className={"fa fa-download"}/> Download
							</a>
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Enroll;
