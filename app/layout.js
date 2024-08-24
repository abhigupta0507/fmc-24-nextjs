import "./globals.css";
import NavBar from "./components/NavBar";
export const metadata = {
  title: "FMC Weekend",
  description: "Asia's Largest Digital Arts Festival",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@500&display=swap" rel="stylesheet"/>
      </head>
      <body className=" font-clash bg-black overflow-x-hidden"><NavBar/>{children}</body>
    </html>
  );
}
