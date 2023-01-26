import React from 'react'


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

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}


export { GreetingComponent, AlertButton, Welcome }
