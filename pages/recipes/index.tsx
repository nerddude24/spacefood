import * as React from "react";
import { useState } from "react";
import Card from "../../comps/Card";
import styles from "../../styles/Recipes.module.scss";

function Recipes() {
	const [cards, setCards] = useState([]);

	React.useEffect(() => {
		async function getCards() {
			const res = await fetch("http://localhost:3000/api/rpi")
				.catch(async (error) => await fetch("http://192.168.1.5:3000/api/rpi"))
				.catch((error) => console.log(error));
      
      if (!(res instanceof Response)) return; 
			const data = await res.json();
			setCards(
				data.items.cards.map((card) => {
					return <Card key={card.id} item={card} />;
				})
			);
		}
		getCards();
	}, []);

	return <main className={styles.Main}>{cards}</main>;
}

export default Recipes;
