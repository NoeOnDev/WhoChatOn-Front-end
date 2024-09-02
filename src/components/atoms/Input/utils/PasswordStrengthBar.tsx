import React from 'react';
import './PasswordStrengthBar.css';

interface PasswordStrengthBarProps {
    strength: 'weak' | 'medium' | 'strong' | 'secure';
}

export const PasswordStrengthBar: React.FC<PasswordStrengthBarProps> = ({ strength }) => {
    return (
        <div className="password-strength-bar">
            <div className={`strength-bar ${strength === 'weak' ? 'active' : ''}`} />
            <div className={`strength-bar ${strength === 'medium' ? 'active' : ''}`} />
            <div className={`strength-bar ${strength === 'strong' ? 'active' : ''}`} />
            <div className={`strength-bar ${strength === 'secure' ? 'active' : ''}`} />
        </div>
    );
};