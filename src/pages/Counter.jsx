import Button from "../components/Button";
import Display from "../components/Display"
import { useState } from "react";

export const Counter = () => {
    // let val = 0;
    const [count, setCount] = useState(0);
    const plus = () => setCount(count + 1)
    const minus = () => setCount(count - 1)

    return (<>
        <Button handleEvent={plus} name ="+"/>
        <Display count={count}/>
        <Button handleEvent={minus} name="-"/>
    </>
    )
}
export default Counter;