import { useState } from "react";
import { FaUser, FaLock } from 'react-icons/fa';
import { Button } from "../atoms/indexAtoms";
import { LabeledInput } from "../molecules/LabelAndInput/LabeledInput";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const validateUsername = (value: string) => {
        return value.length >= 10 && value.length <= 12;
    };

    return (
        <div>
            <h1>Login Page</h1>
            <LabeledInput
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                ariaLabel="Username"
                icon={<FaUser />}
                validate={validateUsername}
            />
            <LabeledInput
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                ariaLabel="Password"
                icon={<FaLock />}
                showPasswordToggle
            />
            <Button type="submit" disabled={!username || !password} ariaLabel="Sign In">
                Sign In
            </Button>
        </div>
    );
};

export default LoginPage;