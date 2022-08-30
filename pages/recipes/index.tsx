import * as React from "react";
import Card from "../../comps/Card";
import styles from "../../styles/Recipes.module.scss";

function Recipes() {
	return (
		<main className={styles.Main}>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
		</main>
	);
}

export default Recipes;
