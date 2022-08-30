import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
	return (
		<div className={styles.home}>
			<section className={styles.Banner}>
				<h1>
					The shittiest food from space.
					
				</h1>
  
				<Link href="/recipes">
					<a className={styles.Link}>Start Browsing!</a>
				</Link>
			</section>
		</div>
	);
};

export default Home;
