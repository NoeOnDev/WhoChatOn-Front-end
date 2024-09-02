import { useState, useEffect } from 'react';
import { FaUser, FaLock, FaEnvelope, FaKey } from 'react-icons/fa';
import { Title, Subtitle, Button } from '../../atoms/indexAtoms';
import { Form } from '../../organisms/indexOrganisms';
import { FormProps } from '../../organisms/interfacesOrganisms';
import WhoChatOnSvg from '../../../assets/chatOn.svg';
import './AuthPage.css';

const validateUsernameOrEmail = (value: string): boolean => {
    const usernameRegex = /^[a-zA-Z0-9]{6,12}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return usernameRegex.test(value) || emailRegex.test(value);
};

const validateEmail = (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
};

const validateUsername = (value: string): boolean => {
    const usernameRegex = /^[a-zA-Z0-9]{6,12}$/;
    return usernameRegex.test(value);
};

const validatePassword = (value: string): boolean => {
    return value.length >= 8;
};

export const AuthPage: React.FC = () => {
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
            setErrors({});
        }, 260);

        return () => clearTimeout(timer);
    }, [isLogin]);

    const handleChange = (field: string, value: string) => {
        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            if (!value) {
                newErrors[field] = 'This field is required';
            } else {
                delete newErrors[field];
                switch (field) {
                    case 'identifier':
                        if (!validateUsernameOrEmail(value)) {
                            newErrors.identifier = 'Invalid username or email';
                        }
                        break;
                    case 'email':
                        if (!validateEmail(value)) {
                            newErrors.email = 'Invalid email';
                        }
                        break;
                    case 'username':
                        if (!validateUsername(value)) {
                            newErrors.username = 'Invalid username';
                        }
                        break;
                    case 'password':
                        if (!isLogin && !validatePassword(value)) {
                            newErrors.password = 'Password must be at least 8 characters';
                        }
                        break;
                    default:
                        break;
                }
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
        } else if (!validateUsernameOrEmail(identifier)) {
            newErrors.identifier = 'Invalid username or email';
        }

        if (!isLogin) {
            if (!email) {
                newErrors.email = 'Please enter your email';
            } else if (!validateEmail(email)) {
                newErrors.email = 'Invalid email';
            }

            if (!username) {
                newErrors.username = 'Please enter your username';
            } else if (!validateUsername(username)) {
                newErrors.username = 'Invalid username';
            }
        }

        if (!password) {
            newErrors.password = 'Please enter your password';
        } else if (!isLogin && !validatePassword(password)) {
            newErrors.password = 'Password must be at least 8 characters';
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
                    showPasswordStrength: true,
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
                </div>
                <div className={`login-form-container ${isLogin ? '' : 'move-left'}`}>
                    <Form {...formProps} />
                    <div className="switch-button-container">
                        <Button onClick={() => setIsLogin(!isLogin)} className="switch-button">
                            {delayedIsLogin ? 'Create Account' : 'Login'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};