import { useState } from "react";


const formInput = [
    {
        placeholder: 'Enter name:',
        type: 'text',
        name: 'fullname',
        typeOption: '',
        required: true,
    },
    {
        placeholder: 'Enter email :',
        type: 'text',
        name: 'email',
        typeOption: '',
        required: true,
    },
    {
        placeholder: 'Enter number :',
        type: 'text',
        name: 'number',
        typeOption: '',
        required: true,
    },
    {
        placeholder: 'Enter password:Zhello123@',
        type: 'text',
        name: 'password',
        typeOption: '',
        required: true,
    },
    {
        placeholder: 'Enter confirm password:',
        type: 'text',
        name: 'c_password',
        typeOption: '',
        required: true,
    },
]

function checkValidate(input) {
    if (input.fullname === "") {
        return 'Full name is required'
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(input.email)) {
        return 'Please enter a valid email!!'
    }
    const numberPattern = /^\+?[6-9]\d{9}$/;

    if (!numberPattern.test(input.number.trim())) {
        return 'Please enter a valid number!!'
    }
    const passwordPattern = /^[A-Z][a-z0-9@$]{7,12}$/;
    if (!passwordPattern.test(input.password)) {
        return 'Password must be at least 8 characters long, and must contain at least one uppercase,digit,@$';
    }

    if (input.password !== input.c_password) {
        return 'Password and confirm password must be same'
    }

    return null;

}

function Form() {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        number: '',
        password: "",
        c_password: ""
    });
    const [error, setError] = useState('All fields required');

    function handleInput(e) {
        const { name, value } = e.target;
        setInput(prevState => {
            const updateInput = { ...prevState, [name]: value };
            const msg = checkValidate(updateInput);
            if (msg) {
                setError(msg);
            } else {
                setError('');
            }
            return updateInput;
        });

    }

    const handleFormData = (e) => {
        e.preventDefault();
        alert("Form submitted");
    }

    return (
        <div className="w-80 border text-center max-h-fit mx-auto mt-10 py-10 rounded-2xl bg-gray-100">
            <h1 className="font-bold text-2xl p-3">Sign Up Form</h1>
            <form onSubmit={handleFormData} >
                {
                    formInput.map(inputBox => (
                        <div key={inputBox.name} className="p-2">
                            <input className="bg-gray-200 p-1 px-2 rounded-lg w-3/4"
                                type={inputBox.type} name={inputBox.name} placeholder={inputBox.placeholder}
                                value={input[inputBox.name]}
                                onChange={handleInput} />
                        </div>
                    ))
                }
                <button type="submit" disabled={!!error} className="disabled:bg-green-200 cursor-pointer bg-green-300 hover:bg-green-400 w-2/4 rounded-2xl mt-2 p-1">Sign up</button>
                {error &&
                    <p className="p-1 text-sm text-red-400">{error}</p>}
            </form>
        </div>
    )
}

export default Form;    