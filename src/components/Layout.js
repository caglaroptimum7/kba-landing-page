import React, {Component} from 'react';
import {
	Link, NavLink
} from "react-router-dom";
import Logo from "../logo-kauai.png";

class Layout extends Component {
	render() {
		return (
			<div className={"container-fluid "}>
				<header className={"container my-5"}>
					<div className={"row "}>
						<div className={"col-lg-4"}>
							<Link to={"/"}><img src={Logo} alt={"Logo"} className={"img-fluid Logo"}/></Link>
						</div>
						<div className={"col-lg-8"}>

							<ul className={"navigation"}>

								<li><NavLink exact={true} activeClassName='is-active' to='/'>HOME</NavLink></li>
								<li><NavLink activeClassName='is-active' to='/enroll'>ENROLL</NavLink></li>
							</ul>
						</div>
					</div>
				</header>
				<section className={"container-fluid "}>
					{this.props.children}
					<footer>
						COPYRIGHT 2020 - KBAKAUAI.ORG
						<br/>
						<a href={"mailto:info@kbakauai.org"}>INFO@KBAKAUAI.ORG</a>


					</footer>
				</section>

			</div>
		);
	}
}

export default Layout;
