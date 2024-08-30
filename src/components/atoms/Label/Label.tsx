import './Label.css';

interface LabelProps {
    text: string;
    className?: string;
}

export const Label: React.FC<LabelProps> = ({ text, className = '' }) => {
    return <label className={`default-label ${className}`}>{text}</label>;
};
