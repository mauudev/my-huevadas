import * as React from 'react';

// // react form with submit
// const LoginForm = () => {
//     const handleSubmit = (event) => {
//         event.preventDefault()
//         console.log(event)
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label htmlFor="email">Email</label>
//                 <input id="email" />
//             </div>
//             <div>
//                 <label htmlFor="password">Password</label>
//                 <input id="password" />
//             </div>
//             <button type="submit">Submit</button>
//         </form>
//     );
// }

// export { LoginForm };


// uncontrolled form
// const LoginForm = () => {
//     const emailRef = React.useRef();
//     const passwordRef = React.useRef();

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         console.log(`emailRef: ${emailRef}\npasswordRef: ${passwordRef}`)
//         console.log(emailRef)
//         const email = emailRef.current.value
//         const password = passwordRef.current.value

//         alert(email + ' ' + password);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label htmlFor="email">Email</label>
//                 <input id="email" type="text" ref={emailRef} />
//             </div>
//             <div>
//                 <label htmlFor="password">Password</label>
//                 <input id="password" type="password" ref={passwordRef} />
//             </div>
//             <button type="submit">Submit</button>
//         </form>
//     );
// };

// export { LoginForm };

// controlled form

// const LoginForm = () => {
//     const [email, setEmail] = React.useState('');
//     const [password, setPassword] = React.useState('');

//     const handleEmail = (event) => {
//         setEmail(event.target.value);
//     };

//     const handlePassword = (event) => {
//         setPassword(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         console.log(`email: ${email}, password: ${password}`)
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label htmlFor="email">Email</label>
//                 <input
//                     id="email"
//                     type="text"
//                     value={email}
//                     onChange={handleEmail}
//                 />
//             </div>
//             <div>
//                 <label htmlFor="password">Password</label>
//                 <input
//                     id="password"
//                     type="password"
//                     value={password}
//                     onChange={handlePassword}
//                 />
//             </div>
//             <button type="submit">Submit</button>
//         </form>
//     );
// };

// export { LoginForm };

// all in one

const LoginForm = () => {
    const [form, setForm] = React.useState({
        email: '',
        password: '',
        rememberPassword: false,
    });

    const handleChange = (event) => {
        console.log(`event.target.id: ${event.target.id}\nevent.target.value: ${event.target.value}`)
        console.log(`form: ${JSON.stringify(form)}`)
        setForm({
            ...form,
            [event.target.id]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        alert(form.email + ' ' + form.password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="text"
                    value={form.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="rememberPassword">Remember password?</label>
                <input
                    id="rememberPassword"
                    type="checkbox"
                    value={form.rememberPassword}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export { LoginForm };