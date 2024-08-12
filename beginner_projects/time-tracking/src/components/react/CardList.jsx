import data from "../../assets/data.json"
import "./CardList.css"
import React from "react"

export default function CardList() {
	return (
		<div className="cardlist__container">
			{data.map((d) => (
				<div key={d.title} className="card__subcontainer">
					<div className="work__container">
						<p className="work__type">{d.title}</p>
						<img
							src="/images/icon-ellipsis.svg"
							alt="ellipsis"
							className="work__ellipse"
						/>
					</div>
					<div className="time__container">
						<p className="time__hours">{d.timeframes.weekly.current}hrs</p>
						<p className="time__total-hours">
							Last Week - {d.timeframes.weekly.previous}hrs
						</p>
					</div>
				</div>
			))}
		</div>
	)
}
