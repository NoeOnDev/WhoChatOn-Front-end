export const getPasswordStrength = (password: string): 'weak' | 'medium' | 'strong' | 'secure' => {
    if (password.length < 8) return 'weak';
    if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*]/.test(password)) {
        return 'secure';
    }
    if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
        return 'strong';
    }
    if (password.length >= 8) {
        return 'medium';
    }
    return 'weak';
};