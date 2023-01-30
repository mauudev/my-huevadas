import React from 'react'
import { DatePicker } from 'antd';

const GreetingComponent = () => {
    return (
        <div>
            <h1>Hello from React !</h1>
        </div>
    )
}

const AlertButton = () => {
    return (
        <div>
            <button type='button' onClick={() => { alert("Hey !") }}>
                Click Me!
            </button>
        </div>
    )
}

const Welcome = (props) => {
    return <h1>Hello, {props.name}</h1>;
}

const MyDatePicker = () => {
    return (
        <div>
            <DatePicker/>
        </div>
    )
}


export { GreetingComponent, AlertButton, Welcome, MyDatePicker}
