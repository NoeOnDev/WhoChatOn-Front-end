import { SubtitleProps } from '../interfacesAtoms';
import './Subtitle.css';

export const Subtitle: React.FC<SubtitleProps> = ({ text, className = '', ...props }) => {
    return <h2 className={`default-subtitle ${className}`} {...props}>{text}</h2>;
};