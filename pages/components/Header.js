
import Link from 'next/link';
import styles from "../../styles/Header.module.css";

export default function Header() {
    return (
      <div className={styles.container}>
                <Link href="/"><img src="/headerLogo.webp" id={styles.headerLogo}></img></Link>
                <div className={styles.links}>
                    <Link href="/drivers" ><a className={styles.link}>Driver </a></Link>
                    <Link href="/constructors" ><a className={styles.link}>Constructors </a></Link>
                    <Link href="/results" ><a className={styles.link}>Results</a></Link>
                    <Link href="/schedule" ><a className={styles.link}>Schedule</a></Link>
                    <Link href="/circuits" ><a className={styles.link}>Circuits</a></Link>
                </div>
      </div> 
    );
  }