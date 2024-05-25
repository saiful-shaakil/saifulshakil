import "./globals.css";
import { Poppins, Reddit_Mono } from "next/font/google";
import Head from "next/head";

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

export const metadata = {
  title: "Saiful Islam Shakil | Data Analyst | Data Science Enthusiast",
  description:
    "Hello! I'm Saiful Islam Shakil, a student in the Industrial and Production Engineering (IPE) department at RUET. My journey started as a full-stack web developer, where I gained expertise in technologies like Next.js, React.js, JavaScript, MongoDB, Node.js, and various other libraries. One of my proudest projects was building a complete meme marketing platform named Memetose using Next.js and MongoDB. Over time, my interests shifted towards data science and analytics. Now, I'm passionate about exploring data, uncovering insights, and sharing my knowledge in these fields. I continuously learn new techniques and tools to improve my skills and enjoy helping others understand the power of data. Thank you for visiting my portfolio - I'm excited for the opportunity to connect and collaborate!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="Q2A7o9I6sRwYs4Lnv0DLFXmJGdExNCP3wDBTwUbdGnk"
        />
      </Head>
      <body className={`${poppins.variable} ${redditmono.variable}`}>
        {children}
      </body>
    </html>
  );
}
