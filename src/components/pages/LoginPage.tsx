import { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { Form } from '../organisms/indexOrganisms';
import { FormProps } from '../organisms/interfacesOrganisms';
import './LoginPage.css';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const formProps: FormProps = {
        inputs: [
            {
                label: 'Email',
                type: 'email',
                value: email,
                onChange: (e) => setEmail(e.target.value),
                placeholder: 'Enter your email',
                ariaLabel: 'Email input',
                inputClassName: 'input-email',
                labelClassName: 'label-email',
                icon: <FaUser />,
            },
            {
                label: 'Password',
                type: 'password',
                value: password,
                onChange: (e) => setPassword(e.target.value),
                placeholder: 'Enter your password',
                ariaLabel: 'Password input',
                inputClassName: 'input-password',
                labelClassName: 'label-password',
                icon: <FaLock />,
                showPasswordToggle: true,
            },
        ],
        button: {
            type: 'submit',
            children: 'Login',
            className: 'login-button',
        },
        formClassName: 'login-form',
        onSubmit: handleSubmit,
    };

    return (
        <div className="login-page">
            <h1>Login</h1>
            <Form {...formProps} />
        </div>
    );
};

export default LoginPage;