import { Navbar } from "./components/Navbar/Navbar";
import "./globals.css";
import { Poppins, Reddit_Mono, Source_Sans_3, Roboto } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const redditmono = Reddit_Mono({
  subsets: ["latin"],
  variable: "--font-redditmono",
  weight: ["400", "500", "600", "700"],
});
const sourcesans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sourcesans",
  weight: ["400", "500", "600", "700", "800", "900"],
});
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Saiful Islam Shakil | Data Analyst | Data Science Enthusiast",
  description:
    "Hello! I'm Saiful Islam Shakil, a student in the Industrial and Production Engineering (IPE) department at RUET. My journey started as a full-stack web developer, where I gained expertise in technologies like Next.js, React.js, JavaScript, MongoDB, Node.js, and various other libraries. One of my proudest projects was building a complete meme marketing platform named Memetose using Next.js and MongoDB. Over time, my interests shifted towards data science and analytics. Now, I'm passionate about exploring data, uncovering insights, and sharing my knowledge in these fields. I continuously learn new techniques and tools to improve my skills and enjoy helping others understand the power of data. Thank you for visiting my portfolio - I'm excited for the opportunity to connect and collaborate!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${redditmono.variable} ${sourcesans.variable} ${roboto.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
