import { useState } from 'react';
import './PasswordStrengthBar.css';

interface PasswordStrengthBarProps {
    strength: 'weak' | 'medium' | 'strong' | 'secure';
    requirements: { label: string; met: boolean }[];
}

export const PasswordStrengthBar: React.FC<PasswordStrengthBarProps> = ({ strength, requirements }) => {
    const [activeBar, setActiveBar] = useState<'weak' | 'medium' | 'strong' | 'secure' | null>(null);

    const handleBarClick = (bar: 'weak' | 'medium' | 'strong' | 'secure') => {
        setActiveBar(activeBar === bar ? null : bar);
    };

    const getBarRequirements = (bar: 'weak' | 'medium' | 'strong' | 'secure') => {
        if (bar === 'weak') return requirements.slice(0, 1);
        if (bar === 'medium') return requirements.slice(0, 2);
        if (bar === 'strong') return requirements.slice(0, 3);
        return requirements;
    };

    return (
        <div className="password-strength-container">
            <div className="password-strength-bar">
                <div
                    className={`strength-bar ${strength === 'weak' ? 'active' : ''}`}
                    onClick={() => handleBarClick('weak')}
                />
                <div
                    className={`strength-bar ${strength === 'medium' ? 'active' : ''}`}
                    onClick={() => handleBarClick('medium')}
                />
                <div
                    className={`strength-bar ${strength === 'strong' ? 'active' : ''}`}
                    onClick={() => handleBarClick('strong')}
                />
                <div
                    className={`strength-bar ${strength === 'secure' ? 'active' : ''}`}
                    onClick={() => handleBarClick('secure')}
                />
            </div>

            {activeBar && (
                <ul className="password-requirements">
                    {getBarRequirements(activeBar).map((req, index) => (
                        <li key={index} className={req.met ? 'met' : ''}>
                            {req.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};