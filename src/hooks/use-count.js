import { useCallback, useState } from "react";

export default function useCount(initialState = 0){
    const [count, setCount] = useState(initialState);

    const decrement = useCallback(() => {
        setCount((currentCount) => currentCount - 1);
    }, []);

    const increment = useCallback(() => {
        setCount((currentCount) => currentCount + 1);
    }, []);

    return {count, decrement, increment};
}