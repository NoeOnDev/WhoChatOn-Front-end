import { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash, FaExclamationCircle } from 'react-icons/fa';
import { InputProps } from '../interfacesAtoms';
import { PasswordStrengthBar } from './utils/PasswordStrengthBar';
import { getPasswordStrength } from './utils/passwordStrength';
import './Input.css';

export const Input: React.FC<InputProps> = ({
    type = 'text',
    value,
    onChange,
    onFocus,
    onBlur,
    className = '',
    placeholder = '',
    ariaLabel = '',
    icon,
    showPasswordToggle = false,
    validate,
    errorMessage,
    showPasswordStrength = false,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isValid, setIsValid] = useState<boolean | null>(null);
    const [hasInput, setHasInput] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState<'weak' | 'medium' | 'strong' | 'secure'>('weak');

    useEffect(() => {
        if (validate && hasInput) {
            setIsValid(validate(value));
        } else {
            setIsValid(null);
        }
    }, [value, validate, hasInput]);

    useEffect(() => {
        if (showPasswordStrength) {
            setPasswordStrength(getPasswordStrength(value));
        }
    }, [value, showPasswordStrength]);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHasInput(e.target.value.length > 0);
        onChange(e);
    };

    const getIconClassName = () => {
        if (!hasInput) return 'default';
        if (isValid === null) return 'default';
        return isValid ? 'valid' : 'invalid';
    };

    return (
        <>
            <div className={`input-wrapper ${className}`}>
                {icon && (
                    <span className={`input-icon ${getIconClassName()}`}>
                        {icon}
                    </span>
                )}
                <input
                    type={showPasswordToggle && showPassword ? 'text' : type}
                    value={value}
                    onChange={handleChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    className={`default-input ${errorMessage ? 'input-error' : ''}`}
                    placeholder={placeholder}
                    aria-label={ariaLabel || placeholder}
                    {...props}
                />
                {showPasswordToggle && value && (
                    <button
                        type="button"
                        className="toggle-password"
                        onClick={handleTogglePassword}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                )}
            </div>
            {errorMessage && (
                <div className="error-message">
                    <FaExclamationCircle className="error-icon" />
                    {errorMessage}
                </div>
            )}
            {showPasswordStrength && (
                <PasswordStrengthBar strength={passwordStrength} />
            )}
        </>
    );
};