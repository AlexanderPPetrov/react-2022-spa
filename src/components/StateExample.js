import { useState } from 'react';
import {Button, Alert} from "react-bootstrap";


function StateExample() {

    const [count, setCount] = useState(1);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function getMessage() {
        if(count > 10) {
            return <Alert variant="danger">Count is huge</Alert>
        }
        if(count > 5){
            return <Alert variant="info">Count is not so big</Alert>
        }
        return null;
    }

    return (
        <div>
            <div>{count}</div>
            <Button variant="danger" onClick={decrement}>-</Button>
            <Button variant="success" onClick={increment}>+</Button>
            {getMessage()}
        </div>
    )
}
export default StateExample;