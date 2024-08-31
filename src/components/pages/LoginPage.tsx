import { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { Title } from '../atoms/indexAtoms';
import { Form } from '../organisms/indexOrganisms';
import { FormProps } from '../organisms/interfacesOrganisms';
import WhoChatOnSvg from '../../assets/chatOn.svg';
import './LoginPage.css';

const LoginPage: React.FC = () => {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');

    const validateUsernameOrEmail = (value: string): boolean => {
        const usernameRegex = /^[a-zA-Z0-9]{8,12}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return usernameRegex.test(value) || emailRegex.test(value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Identifier:', identifier);
        console.log('Password:', password);
    };

    const formProps: FormProps = {
        title: {
            text: 'Login',
            className: 'login-title',
        },
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
            <div className="login-container">
                <div className="login-image-container">
                    <img src={WhoChatOnSvg} alt="WhoChatOn" className="login-image" />
                    <Title text="WhoChatOn" className="login-image-title" />
                </div>
                <div className="login-form-container">
                    <Form {...formProps} />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;