import Image from "next/image"
import styles from "./Header.module.scss"
import Link from "next/link"
import bmwLogo from "./img/bmw_logo.svg"

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <ul className={styles.navigationItems}>
                    <li className={styles.navigationItem}>
                        <Link href="#facts">Nowe BMW iX</Link>
                    </li>
                    <li className={styles.navigationItem}>
                        <Link href="#contact-form">Umów jazdę próbną</Link>
                    </li>
                </ul>
            </nav>
            <Image src={bmwLogo} className={styles.logo} alt="bmw logo" />
            <hr className={styles.headerLine} />
            <p className={styles.headerText}>Radość z jazdy</p>
        </header>
    )
}
