import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Header from "../components/Header";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import {Toaster} from "react-hot-toast";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeContextProvider from "@/context/ThemeContext";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Ricardo Portfolio',
    description: 'Ricardo is a full-stack developer with 8 years of experience.',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className='!scroll-smooth'>
        <body className={`${inter.className} bg-gray-50 text-gray-950 relative overflow-x-hidden pt-28 sm:pt-36 
        dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 `}>
        <div
            className='text-red-50 bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full
                blur-[10rem] sm:w-[68.7rem] dark:bg-[#946263]'
        />
        <div className='text-red-50 bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full
        blur-[10rem] sm:w-[68.7rem] md:left-[35rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'
        />
        <ThemeContextProvider>
            <ActiveSectionContextProvider>
                <Header/>
                {children}
                <Footer/>
                <Toaster position='top-right'/>
                <ThemeSwitch/>
            </ActiveSectionContextProvider>
        </ThemeContextProvider>
        </body>
        </html>
    )
}
