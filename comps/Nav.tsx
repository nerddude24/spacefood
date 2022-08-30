import Image from "next/image";
import Link from "next/link";
import * as React from "react";
function Nav() {
	return (
		<nav>
			<Link href="/">
				<a className="home-btn">
					<Image
						src="https://img.icons8.com/material/64/000000/rice-bowl--v1.png"
						width={30}
						height={30}
						className="nav-img"
					/>
					<h1>SpaceFood</h1>
				</a>
			</Link>
		</nav>
	);
}

export default Nav;
