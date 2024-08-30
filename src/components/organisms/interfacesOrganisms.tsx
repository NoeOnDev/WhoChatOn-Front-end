import { LabeledInputProps } from "../molecules/interfacesMolecules";
import { ButtonProps } from "../atoms/interfacesAtoms";

export interface FormProps {
    inputs: LabeledInputProps[];
    button: ButtonProps;
    formClassName?: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}