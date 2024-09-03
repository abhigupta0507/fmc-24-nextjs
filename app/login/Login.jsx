"use client";

import React, { useEffect, useState } from "react";
import backgroundImage from "../components/bg.jpeg";
import logoImage from "../components/logo.png";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import axios from "axios";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

function Login() {
  const clientid = process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID;
  const router = useRouter(); // Initialize useRouter for client-side navigation

  const handleLogin = async (email) => {
    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        email,
      });
      console.log(res);
      if (res?.data?.newUser) {
        const token = res?.data?.authToken;
        router.push(`/register?token=${token}`); // Use router.push for client-side navigation
      } else {
        setCookie("token", res?.data?.authToken);
        router.push("/dashboard"); // Use router.push for client-side navigation
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Logo at the very top */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 mt-4">
        <img src={logoImage.src} alt="Logo" className="h-16" />
      </div>

      {/* Semi-transparent card containing both "Login" header and Google Sign-In button */}
      <div
        className="relative z-10 flex flex-col items-center bg-black bg-opacity-50 p-8 rounded-lg text-center"
        style={{ marginTop: "-50px" }}
      >
        <h2 className="text-4xl font-bold text-white mb-12">Login</h2>
        {/* Google login button */}
        <div className="w-full flex items-center justify-center">
          <GoogleOAuthProvider clientId={clientid}>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const decode = jwtDecode(credentialResponse.credential);
                const email = decode.email;
                handleLogin(email);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </GoogleOAuthProvider>
        </div>
      </div>
    </div>
  );
}

export default Login;
