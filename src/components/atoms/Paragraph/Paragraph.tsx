import { ParagraphProps } from '../interfacesAtoms';
import './Paragraph.css';

export const Paragraph: React.FC<ParagraphProps> = ({ text, className = '', ...props }) => {
    return <p className={`default-paragraph ${className}`} {...props}>{text}</p>;
};