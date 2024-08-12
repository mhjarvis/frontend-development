export default function Test() {
	return <p>test</p>
}

/* 
---
import data from "../assets/data.json"
import Card from "./Card.astro"

const weekly = document.getElementById("weekly")
const container = document.getElementById("profile__container")

weekly.addEventListener("click", () => {
    container.innerHTML = {
        data.map((data) => (
            <Card data={data.timeframes.weekly} title={data.title} />
        ))
    }
})

const test = data.map((data) => {
    data.timeframes.daily.current
})

--- */
