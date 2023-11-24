import styles from "./Header.module.scss"
import Link from "next/link"

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
            <hr className={styles.headerLine} />
            <p className={styles.headerText}>Radość z jazdy</p>
        </header>
    )
}
