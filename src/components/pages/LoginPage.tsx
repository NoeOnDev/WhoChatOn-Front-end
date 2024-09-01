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
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [delayedIsLogin, setDelayedIsLogin] = useState(isLogin);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDelayedIsLogin(isLogin);
            setPassword('');
        }, 200);

        return () => clearTimeout(timer);
    }, [isLogin]);

    const handleChange = (field: string, value: string) => {
        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            if (value) {
                delete newErrors[field];
            }
            return newErrors;
        });

        switch (field) {
            case 'identifier':
                setIdentifier(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'username':
                setUsername(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors: { [key: string]: string } = {};

        if (!identifier) {
            newErrors.identifier = 'Please enter your email or username';
        }

        if (!isLogin && !email) {
            newErrors.email = 'Please enter your email';
        }

        if (!isLogin && !username) {
            newErrors.username = 'Please enter your username';
        }

        if (!password) {
            newErrors.password = 'Please enter your password';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

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
                    onChange: (e) => handleChange('identifier', e.target.value),
                    placeholder: 'Enter your email or username',
                    ariaLabel: 'Email or Username input',
                    inputClassName: 'input-identifier',
                    labelClassName: 'label-identifier',
                    icon: <FaUser />,
                    errorMessage: errors.identifier,
                },
                {
                    label: 'Password',
                    type: 'password',
                    value: password,
                    onChange: (e) => handleChange('password', e.target.value),
                    placeholder: 'Enter your password',
                    ariaLabel: 'Password input',
                    inputClassName: 'input-password',
                    labelClassName: 'label-password',
                    icon: <FaLock />,
                    showPasswordToggle: true,
                    errorMessage: errors.password,
                },
            ]
            : [
                {
                    label: 'Email',
                    type: 'email',
                    value: email,
                    onChange: (e) => handleChange('email', e.target.value),
                    placeholder: 'Enter your email',
                    ariaLabel: 'Email input',
                    inputClassName: 'input-email',
                    labelClassName: 'label-email',
                    icon: <FaEnvelope />,
                    errorMessage: errors.email,
                },
                {
                    label: 'Username',
                    type: 'text',
                    value: username,
                    onChange: (e) => handleChange('username', e.target.value),
                    placeholder: 'Choose a username',
                    ariaLabel: 'Username input',
                    inputClassName: 'input-username',
                    labelClassName: 'label-username',
                    icon: <FaUser />,
                    errorMessage: errors.username,
                },
                {
                    label: 'Password',
                    type: 'password',
                    value: password,
                    onChange: (e) => handleChange('password', e.target.value),
                    placeholder: 'Create a password',
                    ariaLabel: 'Password input',
                    inputClassName: 'input-password',
                    labelClassName: 'label-password',
                    icon: <FaKey />,
                    showPasswordToggle: true,
                    errorMessage: errors.password,
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