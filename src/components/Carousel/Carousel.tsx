import { useEffect, useState } from "react"
import Image from "next/image"
import styles from "./Carousel.module.scss"

import slide1 from "./img/slide1.png"
import slide2 from "./img/slide2.jpg"
import slide3 from "./img/slide3.jpg"
const slides = [slide1, slide2, slide3]

const SLIDER_INTERVAL = 7000

export default function Carousel() {
    const [slideIdx, setSlideIdx] = useState(0)

    useEffect(() => {
        const slideInterval = setInterval(
            () => setSlideIdx((prevIdx) => (prevIdx + 1) % slides.length),
            SLIDER_INTERVAL
        )
        return () => {
            clearInterval(slideInterval)
        }
    })
    return (
        <>
            <div className={styles.hero}>
                {slides.map((slide, index) => (
                    <Image
                        src={slide}
                        className={`${styles.heroImg} ${slideIdx === index ? styles.imgActive : ""}`}
                        alt="Photograph of a new BMW model"
                        priority
                        key={index}
                    />
                ))}
            </div>
        </>
    )
}
