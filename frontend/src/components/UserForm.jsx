import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        socialMediaHandle: '',
        images: []
    });

    const backendURL = import.meta.env.VITE_BACKEND_URL;

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e, index) => {
        const files = Array.from(e.target.files);
        if (files.length > 1) {
            toast.error('Please upload only one image per file input.');
            return;
        }

        
        const newImages = [...formData.images];

       
        newImages[index] = files[0]; // Assign the uploaded file to the correct index

        // Update state with the new images array
        setFormData({
            ...formData,
            images: newImages
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append('name', formData.name);
        form.append('socialMediaHandle', formData.socialMediaHandle);

       
        formData.images.forEach((image) => {
            if (image) {
                form.append('images', image);
            }
        });

        try {
            const response = await axios.post(`${backendURL}/api/submit`, form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            toast.success('User submission successful!');
            setFormData({ name: '', socialMediaHandle: '', images: [] }); // Reset form
        } catch (error) {
            toast.error(`Submission failed: ${error.response ? error.response.data.message : error.message}`);
        }
    };

    return (
        <div className="max-w-lg mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-6 text-center">Social Media Submission Form</h1>

            <form onSubmit={handleSubmit}>
               
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    />
                </div>

           
                <div className="mb-4">
                    <label htmlFor="socialMediaHandle" className="block text-sm font-medium text-gray-700 mb-1">
                        Social Media Handle:
                    </label>
                    <input
                        type="text"
                        id="socialMediaHandle"
                        name="socialMediaHandle"
                        value={formData.socialMediaHandle}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    />
                </div>

                
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Up to 4 Images:</label>
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="mb-2">
                            <input
                                type="file"
                                onChange={(e) => handleFileChange(e, index)}
                                accept="image/*" // Optional: restrict to image files
                                className="w-full text-gray-700"
                            />
                        </div>
                    ))}
                </div>

              
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
                >
                    Submit
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default UserForm;
