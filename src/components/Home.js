import React, {Component} from 'react';
import comingSoonImg from "../comingsoon.png";

class Home extends Component {
	render() {
		return (
			<div className={"container"}>
				<div className={"coming-soon row"}>
					<div className="col-lg-8">
						<img src={comingSoonImg} alt={"coming soon"} className={"img-fluid"}/>
					</div>
					<div className="col-lg-4">
						<h1>WELCOME</h1>
						<span>Launching <br/>October<br/> 2020</span>
					</div>
				</div>

				<div className={"row content-section"}>
					<div className="col-lg-12">
						<h1 className={"home-title"}>KAUAI - YOUR HOME AWAY FROM HOME...</h1>
						<p>Take a walk through Kauai shops and explore the amazing products you can buy on this Web
							Site.</p>
						{/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
						<iframe src="https://player.vimeo.com/video/461183091" width="100%" height="900" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen/>

					</div>
					<div className="col-lg-12">
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
