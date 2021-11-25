import React from "react";
import { Route, withRouter } from "react-router-dom";

function PublicRouteWithLayout(props) {

	const { layout: Layout, component: Component } = props;

	return (
		<Route
			render={matchProps => (
				<Layout history={matchProps.history}>
					<Component {...matchProps}/>
				</Layout>
			)}
		/>
	)
}

export default withRouter(PublicRouteWithLayout)
