import { useState, useEffect } from 'react';
import { FaUser, FaLock, FaEnvelope, FaKey } from 'react-icons/fa';
import { Title, Subtitle, Paragraph } from '../atoms/indexAtoms';
import { Form } from '../organisms/indexOrganisms';
import { FormProps } from '../organisms/interfacesOrganisms';
import WhoChatOnSvg from '../../assets/chatOn.svg';
import './LoginPage.css';

const LoginPage: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [identifier, setIdentifier] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [delayedIsLogin, setDelayedIsLogin] = useState(isLogin);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDelayedIsLogin(isLogin);
            setPassword('');
        }, 200);

        return () => clearTimeout(timer);
    }, [isLogin]);

    const validateUsernameOrEmail = (value: string): boolean => {
        const usernameRegex = /^[a-zA-Z0-9]{8,12}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return usernameRegex.test(value) || emailRegex.test(value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isLogin) {
            console.log('Identifier:', identifier);
        } else {
            console.log('Username:', username);
            console.log('Email:', email);
        }
        console.log('Password:', password);
    };

    const formProps: FormProps = {
        title: {
            text: delayedIsLogin ? 'Login' : 'Create Account',
            className: 'login-title',
        },
        inputs: delayedIsLogin
            ? [
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
            ]
            : [
                {
                    label: 'Email',
                    type: 'email',
                    value: email,
                    onChange: (e) => setEmail(e.target.value),
                    placeholder: 'Enter your email',
                    ariaLabel: 'Email input',
                    inputClassName: 'input-email',
                    labelClassName: 'label-email',
                    icon: <FaEnvelope />,
                },
                {
                    label: 'Username',
                    type: 'text',
                    value: username,
                    onChange: (e) => setUsername(e.target.value),
                    placeholder: 'Choose a username',
                    ariaLabel: 'Username input',
                    inputClassName: 'input-username',
                    labelClassName: 'label-username',
                    icon: <FaUser />,
                },
                {
                    label: 'Password',
                    type: 'password',
                    value: password,
                    onChange: (e) => setPassword(e.target.value),
                    placeholder: 'Create a password',
                    ariaLabel: 'Password input',
                    inputClassName: 'input-password',
                    labelClassName: 'label-password',
                    icon: <FaKey />,
                    showPasswordToggle: true,
                },
            ],
        button: {
            type: 'submit',
            children: delayedIsLogin ? 'Login' : 'Create Account',
            className: 'login-button',
        },
        formClassName: 'login-form',
        onSubmit: handleSubmit,
    };

    return (
        <div className={`login-page ${isLogin ? 'login' : 'register'}`}>
            <div className="login-container">
                <div className={`login-image-container ${isLogin ? '' : 'move-right'}`}>
                    <Title text="WhoChatOn" className="login-image-title" />
                    <img src={WhoChatOnSvg} alt="WhoChatOn" className={`login-image ${isLogin ? '' : 'flipped'}`} />
                    <Subtitle text="Connect with your friends and family" className='login-image-subtitle' />
                    <Paragraph text="" className='login-image-paragraph' />
                </div>
                <div className={`login-form-container ${isLogin ? '' : 'move-left'}`}>
                    <Form {...formProps} />
                    <button onClick={() => setIsLogin(!isLogin)} className="switch-button">
                        {isLogin ? 'Create Account' : 'Login'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;