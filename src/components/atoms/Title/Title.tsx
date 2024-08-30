import { TitleProps } from '../interfacesAtoms';
import './Title.css';

export const Title: React.FC<TitleProps> = ({ text, className = '', ...props }) => {
    return <h1 className={`default-title ${className}`} {...props}>{text}</h1>;
};