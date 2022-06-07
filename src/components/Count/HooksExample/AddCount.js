import React, { useContext } from 'react';
import { CountContext } from './CountContext';
const AddCount = () => {
    const { count, setCount } = useContext(CountContext);
    const addCount = () => {
        setCount(count + 1);
    }
    return (
        <button onClick={addCount}>count++</button>
    )
}
export default AddCount;
