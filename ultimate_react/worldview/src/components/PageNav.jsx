import { NavLink } from "react-router-dom"

export default function PageNav() {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/">Homepage</NavLink>
				</li>
				<li>
					<NavLink to="/pricing">Pricing</NavLink>
				</li>
				<li>
					<NavLink to="/product">Product</NavLink>
				</li>
				<li>
					<NavLink to="/page-not-found">Page Not Found</NavLink>
				</li>
			</ul>
		</nav>
	)
}
