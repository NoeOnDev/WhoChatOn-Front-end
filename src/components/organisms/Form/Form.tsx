import { useState } from "react";
import { LabeledInput } from "../../molecules/indexMolecules";
import { Button } from "../../atoms/indexAtoms";
import './Form.css';

interface Field {
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

interface FormProps {
    fields: Field[];
    buttonText: string;
    onSubmit: (data: { [key: string]: string }) => void;
}

export const Form: React.FC<FormProps> = ({ fields, buttonText, onSubmit }) => {
    const [formData, setFormData] = useState<{ [key: string]: string }>({});

    const handleChange = (field: string, value: string) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            {fields.map((field, index) => (
                <LabeledInput
                    key={index}
                    label={field.label}
                    type={field.type}
                    value={field.value}
                    onChange={(e) => handleChange(field.label, e.target.value)}
                    onFocus={field.onFocus}
                    onBlur={field.onBlur}
                    inputClassName={field.inputClassName}
                    labelClassName={field.labelClassName}
                    placeholder={field.placeholder}
                    ariaLabel={field.ariaLabel}
                    icon={field.icon}
                    showPasswordToggle={field.showPasswordToggle}
                    validate={field.validate}
                />
            ))}
            <Button type="submit" className="primary">
                {buttonText}
            </Button>
        </form>
    );
};