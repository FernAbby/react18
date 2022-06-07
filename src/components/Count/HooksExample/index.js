import React,{ useState } from 'react';
import AddCount from './AddCount';
import ReduceCount from './ReduceCount';
import { CountContext } from './CountContext';

const Count = () => {
    const [ count, setCount ] = useState(0);

    return (
        <CountContext.Provider value={{ count, setCount }}>
            <p>{count}</p>
            <AddCount/>
            <ReduceCount/>
        </CountContext.Provider>
    );
}

export default Count;
