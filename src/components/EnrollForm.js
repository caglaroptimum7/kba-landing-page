import React, {Component} from 'react';
import Logo from "../kbacopy.png";
import Info from "../info.png";

class EnrollForm extends Component {
	render() {
		return (
			<div className={"container enroll-form"}>
				<div className={"row"}>
					<div className="col-lg-12 text-center">
						<img src={Logo} alt={"Logo"}/><br />
						<h1>KBA - ShopOnKauai.com Enrollment Application.</h1>
						<br />
						<img src={Info} alt={"Info"} className={"img-fluid"}/>
						<br />
						<p>
							Kapaa Business Association, with help from a Cares Act Grant, will provide an online platform for Stores on Kauai. A condition of being on the marketplace is that you need to be a member of the Kapaa Business Association. Once enrolled you will be eligible to receive a new FREE 10.2" latest edition Apple iPad (while stocks last), and a website on the ShopOnKauai.com marketplace with E-Commerce included.<br/>
							All Businesses must be enrolled through this form, at a subscription of $10 a month that will be paid directly and automatically through the built in E-Commerce on the site. These funds will help KBA to pay for the ongoing Advertising and Marketing as well as any needed maintenance of the entire marketplace into the future. Because the number of iPads is limited we ask that if your store is forced to close permanently within the first year, or you plan to leave the island permanently, to relocate elsewhere, we ask that you erase the supplied Apple iPad entirely, and return the Apple iPad to KBA so other stores can take advantage of it. Please contact us by email at info@KBAKauai.org<br/>
<br/><br/>
							This 8 page brochure explains the features of the site and shows a few pages of templates that will be available for your store. To obtain a copy, fill in the Enrollment Form below.

						</p>
						<iframe width={"100%"} height="700px" frameBorder="0" title={"PDF"}  src={"https://img1.wsimg.com/blobby/go/a0e27fdd-b22c-41d8-9f6c-825b2d9a604f/downloads/Shop%20on%20Kauai%208%20page%209-14%20Final.pdf?ver=1601612092366"}></iframe>
					</div>
				</div>
				<iframe height="4096" width={"100%"} title="Embedded Wufoo Form" allowTransparency="true" frameBorder="0" scrolling="no"  src="https://optimum7.wufoo.com/embed/p1jmlwzz1ykt77r/">
					<a href="https://optimum7.wufoo.com/forms/p1jmlwzz1ykt77r/">Fill out my Wufoo form!</a></iframe>
			</div>
		);
	}
}

export default EnrollForm;
