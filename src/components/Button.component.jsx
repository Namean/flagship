import { click } from "@testing-library/user-event/dist/click";

export function Button() {

    function clickHandler() {
        alert("You clicked a button!");
    }
    return <button onClick={() => clickHandler()}>Click me!</button>
}