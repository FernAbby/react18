import React, { useContext } from 'react';
import { CountContext } from './CountContext';
const ReduceCount = () => {
    const { count, setCount } = useContext(CountContext);
    const reduceCount = () => {
        setCount(count - 1);
    }
    return (
        <button onClick={reduceCount}>count--</button>
    )
}
export default ReduceCount;
