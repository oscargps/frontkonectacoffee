import React from "react";
// redux
import {
	BrowserRouter,
	Switch,
	Route,
	HashRouter,
	Redirect
} from "react-router-dom";
// routes
import routes from "./routes";

const PrivateRoutes = ({ route }) => {
	return <route.component {...route} />;
};

// component
const AppRoutes = (props) => {
	return (
		<>
			<HashRouter basename={window.baseName}>
				<BrowserRouter basename={"/"}>
					<Switch>
						{routes.map((route, i) => {
							return (
								<Route key={i} path={route.layout}>
									<PrivateRoutes route={route} />
								</Route>
							);
						})}
						<Redirect from="/" to="/admin/index" />
					</Switch>
				</BrowserRouter>
			</HashRouter>
		</>
	);
};

export default AppRoutes;
