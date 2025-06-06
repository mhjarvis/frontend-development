/* eslint-disable react/prop-types */
import { useState } from "react"

const App = () => {
	const [left, setLeft] = useState(0)
	const [right, setRight] = useState(0)
	const [allClicks, setAll] = useState([])
	const [total, setTotal] = useState(0)

	const handleLeftClick = () => {
		setAll(allClicks.concat("L"))
		const updatedLeft = left + 1
		setLeft(updatedLeft)
		setTotal(updatedLeft + right)
	}

	const handleRightClick = () => {
		setAll(allClicks.concat("R"))
		const updatedRight = right + 1
		setRight(updatedRight)
		setTotal(left + updatedRight)
	}

	return (
		<div>
			{left}
			<Button
				onClick={() => {
					setLeft(0)
					setRight(0)
					setAll([])
					setTotal(0)
				}}
				text="reset"
			/>
			<Button onClick={handleLeftClick} text="left" />
			<Button onClick={handleRightClick} text="right" />
			{right}
			<History allClicks={allClicks} />
		</div>
	)
}

const History = (props) => {
	if (props.allClicks.length === 0) {
		return <div>the app is used by pressing the buttons</div>
	}
	return <div>button press history: {props.allClicks.join(" ")}</div>
}
export default App

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
