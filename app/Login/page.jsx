"use client";

import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

// Import the background image
import backgroundImage from '../components/bg.jpeg';
// Import the logo image
import logoImage from '../components/logo.jpeg';

function Login() {
    const handleGoogleSuccess = (response) => {
        console.log('Google Sign-In successful:', response);
    };

    const handleGoogleFailure = (error) => {
        console.error('Google Sign-In failed:', error);
    };

    return (
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
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
                    <img src={logoImage.src} alt="Logo" className="h-16 opacity-70" />
                </div>

                {/* Semi-transparent card containing both "Login" header and Google Sign-In button */}
                <div
                    className="relative z-10 flex flex-col items-center bg-black bg-opacity-50 p-8 rounded-lg text-center"
                    style={{ marginTop: '-100px' }} // Shift the card 100px up
                >
                    <h2 className="text-3xl font-bold text-white mb-12">Login</h2> {/* Increased margin-bottom */}
                    <GoogleLogin
                        onSuccess={handleGoogleSuccess}
                        onError={handleGoogleFailure}
                        useOneTap
                        text="signin_with"
                        logo_alignment="center"
                        shape="circle"
                        style={{
                            height: '50px',
                            width: '50px',
                        }}
                    />
                </div>
            </div>
        </GoogleOAuthProvider>
    );
}

export default Login;
