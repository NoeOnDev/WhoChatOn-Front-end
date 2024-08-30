import { ButtonProps } from '../interfacesAtoms';
import './Button.css';

export const Button: React.FC<ButtonProps> = ({
    type = 'button',
    onClick,
    className = '',
    disabled = false,
    children,
    ariaLabel,
    icon,
    ...props
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`button ${className}`}
            disabled={disabled}
            aria-label={ariaLabel}
            {...props}
        >
            {icon && <span className="button-icon">{icon}</span>}
            {children}
        </button>
    );
};