import { useState } from "react"
import styles from "./Hero.module.scss"
import Image from "next/image"
import logo from "./img/bmw_i_logo.svg"

export default function Hero() {
    const [slide, setSlide] = useState(0)
    return (
        <section className={styles.heroSection}>
            <div className={styles.slogan}>
                <Image src={logo} className={styles.heroLogo} alt="bmw I-shaped logo" />
                <h1 className={styles.heroHeader}>Nowe BMW iX</h1>
                <h2 className={styles.heroSubheader}>PIONIER NOWEJ ERY.</h2>
            </div>
            <div className={styles.actions}>
                <div className={styles.sliderButtons}>
                    <div
                        onClick={() => setSlide(0)}
                        className={`${styles.sliderBtn} ${slide === 0 ? styles.btnActive : ""}`}></div>
                    <div
                        onClick={() => setSlide(1)}
                        className={`${styles.sliderBtn} ${slide === 1 ? styles.btnActive : ""}`}></div>
                    <div
                        onClick={() => setSlide(2)}
                        className={`${styles.sliderBtn} ${slide === 2 ? styles.btnActive : ""}`}></div>
                </div>
                <div className={styles.cta}>
                    <button className={styles.ctaBtn}>UMÓW JAZDĘ PRÓBNĄ</button>
                </div>
            </div>
        </section>
    )
}
