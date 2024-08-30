import { LabeledInput } from '../../molecules/indexMolecules';
import { Button } from '../../atoms/indexAtoms';
import { FormProps } from '../interfacesOrganisms';
import './Form.css';

export const Form: React.FC<FormProps> = ({
    inputs,
    button,
    onSubmit,
    formClassName = '',
}) => {
    return (
        <form className={`form ${formClassName}`} onSubmit={onSubmit}>
            {inputs.map((inputProps, index) => (
                <LabeledInput key={index} {...inputProps} />
            ))}
            <Button {...button} />
        </form>
    );
};