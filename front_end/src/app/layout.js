import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "./context/user-context";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <UserProvider>{children}</UserProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
