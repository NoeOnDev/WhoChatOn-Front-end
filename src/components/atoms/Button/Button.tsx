import './Button.css';

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    disabled?: boolean;
    children: React.ReactNode;
    ariaLabel?: string;
    icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    type = 'button',
    onClick,
    className = '',
    disabled = false,
    children,
    ariaLabel,
    icon
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`button ${className}`}
            disabled={disabled}
            aria-label={ariaLabel}
        >
            {icon && <span className="button-icon">{icon}</span>}
            {children}
        </button>
    );
};