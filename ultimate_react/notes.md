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
