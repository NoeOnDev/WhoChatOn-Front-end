export const getPasswordStrength = (password: string) => {
    const requirements = [
        { label: 'At least 8 characters', met: password.length >= 8 },
        { label: 'An uppercase letter', met: /[A-Z]/.test(password) },
        { label: 'A number', met: /[0-9]/.test(password) },
        { label: 'A special character (!@#$%^&*)', met: /[!@#$%^&*]/.test(password) }
    ];

    const metCount = requirements.filter(req => req.met).length;

    let strength: 'weak' | 'medium' | 'strong' | 'secure' = 'weak';
    if (metCount === 4) strength = 'secure';
    else if (metCount === 3) strength = 'strong';
    else if (metCount === 2) strength = 'medium';

    return { strength, requirements };
};