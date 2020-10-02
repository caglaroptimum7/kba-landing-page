import React from 'react';
import Home from "./components/Home"
import Enroll from "./components/Enroll"
import EnrollForm from "./components/EnrollForm"
import Layout from "./components/Layout"
import './App.scss';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

function App() {
	return (
		<Router>
			<Switch>
				<Layout>
					<Route exact path={"/"} component={Home}/>
					<Route path={"/enroll"} component={Enroll}/>
					<Route path={"/enroll-form"} component={EnrollForm}/>
				</Layout>
			</Switch>
		</Router>
	);
}

export default App;
