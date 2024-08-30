import { Input, Label } from "../../atoms/indexAtoms";
import './LabeledInput.css';

interface LabeledInputProps {
    label: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    inputClassName?: string;
    labelClassName?: string;
    placeholder?: string;
    ariaLabel?: string;
    icon?: React.ReactNode;
    showPasswordToggle?: boolean;
    validate?: (value: string) => boolean;
}

export const LabeledInput: React.FC<LabeledInputProps> = ({
    label,
    type = 'text',
    value,
    onChange,
    onFocus,
    onBlur,
    inputClassName = '',
    labelClassName = '',
    placeholder = '',
    ariaLabel = '',
    icon,
    showPasswordToggle = false,
    validate
}) => {
    return (
        <div className="labeled-input">
            <Label text={label} className={labelClassName} />
            <Input
                type={type}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                className={inputClassName}
                placeholder={placeholder}
                ariaLabel={ariaLabel}
                icon={icon}
                showPasswordToggle={showPasswordToggle}
                validate={validate}
            />
        </div>
    );
};