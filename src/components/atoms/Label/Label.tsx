import { LabelProps } from '../interfacesAtoms';
import './Label.css';

export const Label: React.FC<LabelProps> = ({ text, className = '' }) => {
    return <label className={`default-label ${className}`}>{text}</label>;
};