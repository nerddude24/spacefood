import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

function Layout({ children }) {
	return (
		<div className="content">
			<Nav></Nav>
			{children}
			<Footer></Footer>
		</div>
	);
}

export default Layout;
