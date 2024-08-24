"use client";

import React from 'react';

// Import the background image
import backgroundImage from '../components/bg.jpeg';
// Import the logo image
import logoImage from '../components/logo.jpeg';

function Login() {
    const handleGoogleSignInClick = () => {
        console.log('Google Sign-In button clicked');
        // Trigger your backend authentication process here
        // Example: window.location.href = '/auth/google';
    };

    return (
        <div
            className="relative h-screen flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url(${backgroundImage.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
            }}
        >
            {/* Logo at the very top */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 mt-4">
                <img src={logoImage.src} alt="Logo" className="h-16" /> {/* Removed opacity-70 */}
            </div>

            {/* Semi-transparent card containing both "Login" header and Google Sign-In button */}
            <div
                className="relative z-10 flex flex-col items-center bg-black bg-opacity-50 p-8 rounded-lg text-center"
                style={{ marginTop: '-50px' }} // Shift the card 50px down
            >
                <h2 className="text-4xl font-bold text-white mb-12">Login</h2> {/* Increased font size */}
                <button
                    onClick={handleGoogleSignInClick}
                    className="bg-white text-black rounded-full p-3 flex items-center"
                    style={{
                        height: '50px',
                        padding: '0 20px', // Added padding for text
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px', // Space between icon and text
                    }}
                >
                    <img
                        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                        alt="Google"
                        className="h-7" // Adjusted height to make the icon smaller
                    />
                    <span className="text-black font-medium">Sign in with Google</span>
                </button>
            </div>
        </div>
    );
}

export default Login;
