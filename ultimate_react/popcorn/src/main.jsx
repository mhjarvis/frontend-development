import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
/* import StarRating from "./StarRating.jsx";
 */
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
		{/* 		<StarRating
			maxRating={5}
			className="test"
			messages={["Terrible", "Good", "Poop", "Sure", "Greatish"]}
			defaultRating={3}
		/>
		<StarRating maxRating={10} />
		<StarRating size={24} />
		{/* 		<App />
		 */}{" "}
		*/
	</StrictMode>
);
