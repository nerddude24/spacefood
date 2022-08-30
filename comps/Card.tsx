import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Card.module.scss";

function Card() {
	return (
		<article className={styles.Card}>
			<Image src="/burger.jpg" alt="" width={250} height={250} className={styles.Image} />
			<section className={styles.CardInfo}>
				<h1>
					Hamburger
					<span>
						<Link href="/recipes/burger">
							<a className={styles.viewBtn}>View Recipe</a>
						</Link>
					</span>
				</h1>
				<p>I mean... you know burgers, right?</p>
			</section>
		</article>
	);
}

export default Card;
