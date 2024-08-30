import { LabelProps } from '../interfacesAtoms';
import './Label.css';

export const Label: React.FC<LabelProps> = ({ text, className = '', ...props }) => {
    return <label className={`default-label ${className}`} {...props}>{text}</label>;
};