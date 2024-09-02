import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthPage } from "../components/pages/indexPages";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AuthPage />} />
            </Routes>
        </Router>
    );
};

export default App;