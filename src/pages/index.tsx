import Head from "next/head"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Carousel from "../components/Carousel/Carousel"

export default function Home() {
    return (
        <>
            <Head>
                <title>BMW iX</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Hero />
            <Carousel />
            <main>
                {/* 
                <Facts />
                <Aerodynamics />
                <Gallery />
                <ContactForm />
                <Footer /> */}
            </main>
        </>
    )
}
