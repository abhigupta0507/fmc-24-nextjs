"use client";
import React, { useEffect, useRef, useState } from "react";
import backgroundImage from "../components/bg.jpeg";
import NavBar from "../components/NavBar.jsx";
import { useCookies } from "next-client-cookies";
import { getTotalPrice } from "../../utils/events/events.js";
import upload_image from "../../utils/image_upload.js";
import { useRouter } from "next/navigation";
import Image from "next/image";
const Alert = ({ type, message, onClose }) => {
  return (
    <div
      className={`mt-3 p-4 rounded-lg shadow-lg ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      } text-white`}
    >
      <p>{message}</p>
      <button className="mt-2 text-sm underline" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default function FormPage() {
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const [sending, setSending] = useState(false);
  const [total, setTotal] = useState("fetching...");
  const fileRef = useRef(null);
  const cookies = useCookies();
  const router=useRouter()

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/cart`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.get("authToken")}`,
          },
        }
      ).then((res) => res.json());
      setTotal("₹" + getTotalPrice(res));
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const raw_image = fileRef.current.files[0];
    const image_url = await upload_image(raw_image);
    // console.log(image_url);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/checkout`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.get("authToken")}`,
        },
        body:JSON.stringify({image_url:image_url,amount_paid:total.slice(1)})
      }
    ).then((res) => res.json());
    // console.log(res);
    e.target.reset();
    setSending(false);
    router.push('/')
  };

  const closeAlert = () => {
    setAlert({ show: false, message: "", type: "" });
  };

  return (
    <>
      <NavBar />
      <section
        className="bg-fixed bg-cover bg-center overflow-y-hidden"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundRepeat: "repeat",
        }}
      >
        <div className="relative bg-black text-white py-8 w-[90vw] mx-auto justify-between rounded-2xl flex flex-col p-6 md:p-12 backdrop-blur-md bg-gray-400/10 overflow-hidden">
          <div className="container mx-auto flex flex-wrap justify-center items-center px-4">
            <div className="w-full flex flex-col items-center mb-6 lg:mb-0">
              <div className="bg-gray-200 w-[400px] h-[400px] flex items-center justify-center">
                <Image src="/qr_code.jpg" alt="QR Code" width={400} height={400} />
                {/* <p className="text-black">QR HERE</p> */}
              </div>

              <form
                className="flex flex-col space-y-4 mt-4 w-[400px] max-w-full"
                onSubmit={handleSubmit}
              >
                <div className="bg-transparent text-decoration-none text-lg font-extrabold w-full p-2.5">{`subtotal : ${total}`}</div>
                <input
                  type="file"
                  name="add_file"
                  id="add_file"
                  ref={fileRef}
                  className="bg-gray-200 border border-[#A52A2A] text-black text-sm rounded-lg focus:ring-red-500 focus:border-[#A52A2A] w-full p-2.5"
                  placeholder=""
                  required
                />
                <button
                  type="submit"
                  className="bg-red-500 p-3 rounded-lg text-white font-semibold hover:bg-red-600"
                  disabled={sending}
                >
                  Confirm
                </button>
              </form>
              {alert.show && (
                <Alert
                  type={alert.type}
                  message={alert.message}
                  onClose={closeAlert}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
