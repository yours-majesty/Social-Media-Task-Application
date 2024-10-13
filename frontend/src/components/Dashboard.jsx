import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${backendUrl}/api/users`);
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users", error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className="ml-64 p-8">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            {users.length === 0 ? (
                <p className="text-center text-lg text-gray-600">Nothing to show</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {users.map((user) => (
                        <div key={user._id} className="p-4 border rounded-lg shadow">
                            <h2 className="font-semibold text-xl">{user.name}</h2>
                            <p className="text-gray-600">@{user.socialMediaHandle}</p>
                            <div className="mt-2 grid grid-cols-1 gap-2">
                                {user.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image} 
                                        alt={`User Submission ${index + 1}`}
                                        className="w-full h-40 object-cover rounded"
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
