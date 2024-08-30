import { LabeledInputProps } from "../molecules/interfacesMolecules";
import { ButtonProps, TitleProps } from "../atoms/interfacesAtoms";

export interface FormProps {
    title: TitleProps;
    inputs: LabeledInputProps[];
    button: ButtonProps;
    formClassName?: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}