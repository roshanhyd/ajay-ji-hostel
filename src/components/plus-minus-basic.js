import { useDispatch } from "react-redux"
import { decrementCounter, incrementCounter } from "../redux/action"

const PlusMinusComponent = () => {
    const dispatch =useDispatch();
    return (
        <>
            Click me To + <button onClick={() => dispatch(incrementCounter())}></button>
            Click me To - <button onClick={() => dispatch(decrementCounter())}></button>
        </>
    )
}

export default PlusMinusComponent;