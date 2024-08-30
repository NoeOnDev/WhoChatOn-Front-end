import { InputProps, LabelProps } from "../atoms/interfacesAtoms"

export interface LabeledInputProps extends InputProps, Omit<LabelProps, 'text'> {
    label: string;
    inputClassName?: string;
    labelClassName?: string;
}