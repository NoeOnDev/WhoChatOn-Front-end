import { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { Form } from '../organisms/indexOrganisms';
import { FormProps } from '../organisms/interfacesOrganisms';
import './LoginPage.css';

const LoginPage: React.FC = () => {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const validateUsernameOrEmail = (value: string): boolean => {
        const usernameRegex = /^[a-zA-Z0-9]{8,12}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return usernameRegex.test(value) || emailRegex.test(value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateUsernameOrEmail(identifier)) {
            setError('Please enter a valid username (8-12 alphanumeric characters) or email.');
            return;
        }
        setError('');
        console.log('Identifier:', identifier);
        console.log('Password:', password);
    };

    const formProps: FormProps = {
        inputs: [
            {
                label: 'Email or Username',
                type: 'text',
                value: identifier,
                onChange: (e) => setIdentifier(e.target.value),
                placeholder: 'Enter your email or username',
                ariaLabel: 'Email or Username input',
                inputClassName: 'input-identifier',
                labelClassName: 'label-identifier',
                icon: <FaUser />,
                validate: validateUsernameOrEmail,
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
            {error && <p className="error-message">{error}</p>}
            <Form {...formProps} />
        </div>
    );
};

export default LoginPage;