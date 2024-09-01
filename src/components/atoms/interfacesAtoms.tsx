export interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    disabled?: boolean;
    children: React.ReactNode;
    ariaLabel?: string;
    icon?: React.ReactNode;
}

export interface InputProps {
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    className?: string;
    placeholder?: string;
    ariaLabel?: string;
    icon?: React.ReactNode;
    showPasswordToggle?: boolean;
    validate?: (value: string) => boolean;
    errorMessage?: string;
}

export interface LabelProps {
    text: string;
    className?: string;
}

export interface TitleProps {
    text: string;
    className?: string;
}

export interface SubtitleProps {
    text: string;
    className?: string;
}

export interface ParagraphProps {
    text: string;
    className?: string;
}