import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Card.module.scss";

function Card(props) {
	const { id, img, name, desc, displayName } = props.item;
	return (
		<article className={styles.Card}>
			<Image src={`${img}`} alt={name} width={250} height={250} className={styles.Image} />
			<section className={styles.CardInfo}>
				<div className={styles.CardHead}>
					<h1>{displayName}</h1>
					<Link href={`/recipes/${id}`}>
						<a className={styles.viewBtn}>View Recipe</a>
					</Link>
				</div>
				<p>{desc}</p>
			</section>
		</article>
	);
}

export default Card;
