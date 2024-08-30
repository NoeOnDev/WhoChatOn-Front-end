import { Input, Label } from "../../atoms/indexAtoms";
import { InputProps, LabelProps } from "../../atoms/interfacesAtoms";
import './LabeledInput.css';

interface LabeledInputProps extends InputProps, Omit<LabelProps, 'text'> {
    label: string;
    inputClassName?: string;
    labelClassName?: string;
}

export const LabeledInput: React.FC<LabeledInputProps> = ({
    label,
    inputClassName = '',
    labelClassName = '',
    ...inputProps
}) => {
    return (
        <div className="labeled-input">
            <Label text={label} className={labelClassName} />
            <Input {...inputProps} className={inputClassName} />
        </div>
    );
};