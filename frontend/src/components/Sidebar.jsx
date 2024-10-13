
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="h-screen bg-zinc-900 w-80 py-6 px-4 shadow-lg">
            <div className="text-white text-2xl font-bold mb-8">User Submission App</div>
            <ul className="space-y-4">
               
                <li>
                    <Link to="/" className="block text-white hover:bg-blue-500 py-2 px-4 rounded transition-colors">Submit Form</Link>
                </li>
                <li>
                    <Link to="/admin" className="block text-white hover:bg-blue-500 py-2 px-4 rounded transition-colors">Admin Dashboard</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
