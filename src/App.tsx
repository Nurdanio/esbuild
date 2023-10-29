import {useState} from "react";

export const App = () => {
    const [count, setCount] = useState(0)

    return (<>
        <h1>{count}</h1>
            <div>asjhdksjdhas</div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount( count - 1)}>-</button>
        </>
    );
};

