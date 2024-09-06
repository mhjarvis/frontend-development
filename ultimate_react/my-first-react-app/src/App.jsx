/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* import { useState } from "react"
 */
import "./App.css"

function App() {
	const pizzaData = [
		{
			name: "Focaccia",
			ingredients: "Bread with italian olive oil and rosemary",
			price: 6,
			photoName: "pizzas/focaccia.jpg",
			soldOut: false,
		},
		{
			name: "Pizza Margherita",
			ingredients: "Tomato and mozarella",
			price: 10,
			photoName: "pizzas/margherita.jpg",
			soldOut: false,
		},
		{
			name: "Pizza Spinaci",
			ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
			price: 12,
			photoName: "pizzas/spinaci.jpg",
			soldOut: false,
		},
		{
			name: "Pizza Funghi",
			ingredients: "Tomato, mozarella, mushrooms, and onion",
			price: 12,
			photoName: "pizzas/funghi.jpg",
			soldOut: false,
		},
		{
			name: "Pizza Salamino",
			ingredients: "Tomato, mozarella, and pepperoni",
			price: 15,
			photoName: "pizzas/salamino.jpg",
			soldOut: true,
		},
		{
			name: "Pizza Prosciutto",
			ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
			price: 18,
			photoName: "pizzas/prosciutto.jpg",
			soldOut: false,
		},
	]

	return (
		<>
			<Header title="Fast React Pizza Co." />
			<div>
				{pizzaData.map((pizza) => (
					<div>{pizza.name}</div>
				))}
			</div>

			<Footer />
		</>
	)
}

function Header({ title }) {
	// eslint-disable-next-line react/prop-types
	return <h1 style={{ color: "green" }}>{title}</h1>
}

function Footer() {
	const hour = new Date().getHours()

	return (
		<footer className="footer">
			We are currently open! It is {hour} oclock!
		</footer>
	)
}

export default App
