import * as React from "react";
import Image from "next/image";
import styles from "../../styles/RecipePage.module.scss";
import { useState } from "react";

export const getStaticPaths = async () => {
	const res = await fetch("http://localhost:3000/api/rpi")
		.catch(async (error) => await fetch("http://192.168.1.5:3000/api/rpi"))
		.catch((error) => console.log(error));

	if (!(res instanceof Response)) return;
	const data = await res.json();

	const paths = data.items.pages.map((page) => {
		return { params: { id: page.id.toString() } };
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = parseInt(context.params.id);
	const res = await fetch("http://localhost:3000/api/rpi")
		.catch(async (error) => await fetch("http://192.168.1.5:3000/api/rpi"))
		.catch((error) => console.log(error));

	if (!(res instanceof Response)) return;
	const data = await res.json();

	return {
		props: {
			page: data.items.pages[id - 1],
		},
	};
};

const RecipePage = ({ page }) => {
	return (
		<main className={styles.Page}>
			<h1>{page.name}</h1>
			<Image src={page.img} width={300} height={300} className={styles.img} />
			<ul>
				{page.steps.map((step, i) => {
					return <li key={i + 1}>{step}</li>;
				})}
			</ul>
		</main>
	);
};

export default RecipePage;
