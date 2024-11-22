import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import 'animate.css';
import ContactForm from './ContactForm';

function Contact1() {
    const { theme } = useContext(ThemeContext);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    // Define theme-based styles
    const themeStyles = {
        'light-theme': 'bg-gray-100 text-gray-800',
        'dark-theme': 'bg-gray-900 text-white',
        'blue-theme': 'bg-blue-900 text-white',
        'green-theme': 'bg-green-900 text-white',
    };

    const handleSubscribe = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://banking-system-jc25.onrender.com/newsletter/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            setMessage(data.message);
            if (response.ok) {
                setIsSubscribed(true);
            }
        } catch (error) {
            setMessage('Failed to subscribe. Please try again.');
        }
    };

    const handleUnsubscribe = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://banking-system-jc25.onrender.com/newsletter/unsubscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            setMessage(data.message);
            if (response.ok) {
                setIsSubscribed(false);
            }
        } catch (error) {
            setMessage('Failed to unsubscribe. Please try again.');
        }
    };

    return (
        <>
            <section>
                {/* Sidebar Section */}
                <div className="p-6 bg-white rounded-lg shadow-lg animate__animated animate__fadeInRight">
                    <input
                        type='text'
                        placeholder='Search'
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <h3 className="font-bold text-lg mb-2">Categories</h3>
                    <ul className="space-y-1">
                        <li>Advice</li>
                        <li>Credit cards</li>
                        <li>Financial</li>
                        <li>Making Money</li>
                        <li>Personal financial</li>
                        <li>Online banking</li>
                        <li>Mobile banking</li>
                    </ul>
                    <h3 className="font-bold text-lg mt-6 mb-2">Recent posts</h3>
                    <ul className="space-y-1">
                        <li>June 10, 2024 - Bank is the best way to save in the future</li>
                        <li>June 21, 2024 - Why do you need to open a bank account?</li>
                        <li>June 30, 2024 - The benefits that we get through credit cards</li>
                    </ul>
                    <h3 className="font-bold text-lg mt-6 mb-2">Popular Tags</h3>
                    <p className="space-x-2">
                        <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">Banking</span>
                        <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">Credit cards</span>
                        <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">Saving</span>
                    </p>
                    <div className="mt-6">
                        <form onSubmit={handleSubscribe}>
                            <input
                                type='text'
                                placeholder='Newsletter'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 mb-2 border border-gray-300 rounded"
                                required
                            />
                            <button className="w-full bg-blue-500 text-white p-2 rounded">Submit Newsletter</button>
                        </form>
                        {isSubscribed && (
                            <button onClick={handleUnsubscribe} className="w-full bg-red-500 text-white p-2 rounded mt-2">
                                Unsubscribe
                            </button>
                        )}
                        {message && <p className="text-center mt-2">{message}</p>}
                    </div>
                </div>
            </section>

            {/* Contact and Office Section */}
            <section className={`py-12 ${themeStyles[theme]} text-center animate__animated animate__fadeIn`}>
                <div className="max-w-3xl mx-auto space-y-6">
                    <div className="text-lg">
                        <h3 className="text-xl font-bold mb-2">Office</h3>
                        <p>Sheritage Banking Corporation, 6890 Blvd, The Bronx, NY 1058, New York, USA</p>
                    </div>
                    <div className="text-lg">
                        <h3 className="text-xl font-bold mb-2">Contact</h3>
                        <p>+447309652806</p>
                        <p>sheritage144@gmail.com</p>
                        {/* <p>fax@leve.com</p> */}
                    </div>
                    <div className="text-lg">
                        <h3 className="text-xl font-bold mb-2">Open hours</h3>
                        <p>Mon–Fri: 8 AM - 9 PM</p>
                        <p>Saturday: 8 AM - 8 PM</p>
                        <p>Sunday: 8 AM - 5 PM</p>
                    </div>
                </div>
            </section>

            <ContactForm />
        </>
    );
}

export default Contact1;
