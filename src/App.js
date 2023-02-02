import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';

function App() {
    return (
        <div className="main-layout">
            <div className="main-container">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;