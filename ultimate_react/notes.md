# React Notes

## Basic Setup Using Vite

    npm create vite@latest my-first-react-app -- --template react

## General

When updating `state` based on a current state value, use a callback function to get the current state at time of execution.

    const [x, setX] = useState(1)

    if (x < 3) {
        setX((lastValue) => lastValue + 1)
    }

This is of course not required when setting the current state value to an entirly new value. This should be mainly used when the current state update is based on the current state value.

## ISSUE - Prop Drilling

Prop Drilling refers to the action of passing a prop through several different components until it goes all the way to the component that actually is using it. This leads to many components receiving props that they do not actually need.

### SOLUTION A - Component Composition

One possible solution is what is called Component Composition. This means, combining different components using the `children` prop (or explicitly defined props).

```jsx
function Modal({ children }) {
	return <div className="modal">{children}</div>;
}

function Success() {
	return <p>Well Done!</p>;
}
```

Essentially, this amounts to:

```jsx
<Modal>
	<Success />
</Modal>
```

Another example:

```jsx
export default function App() {
	const [movies, setMovies] = useState(tempMovieData);

	return (
		<>
			<NavBar>
				<Search />
				<NumResults movies={movies} />
			</NavBar>
			<Main>
				<ListBox>
					<MovieList movies={movies} />
				</ListBox>
				<WatchedBox />
			</Main>
		</>
	);
}
```

## TypeChecking Props

Type checking will help prevent wrong values to be passed into components. TypeScript might be more beneficial to use long-term.

```jsx
import PropTypes from "prop-types"; // import

StarRating.propTypes = {
	maxRating: PropTypes.number,
};
```
