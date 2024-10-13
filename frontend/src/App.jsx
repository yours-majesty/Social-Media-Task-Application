
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import UserForm from './components/UserForm';
import Dashboard from './components/Dashboard';

const App = () => {
    return (
        <Router>
            <div className="flex">
                <Sidebar />
                <div className="w-full">
                    <Routes>
                        
                        <Route path="/" element={<UserForm />} />
                        <Route path="/admin" element={<Dashboard />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};


export default App;
