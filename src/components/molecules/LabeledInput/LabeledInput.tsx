import { Input, Label } from "../../atoms/indexAtoms";
import { LabeledInputProps } from "../interfacesMolecules";
import './LabeledInput.css';

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