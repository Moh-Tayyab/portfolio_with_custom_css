import Link from "next/link";
import styles from "@/Styling/header.module.css";  // Ensure correct path to your CSS module

const Navbar = () => {
  return (
    <header className={`${styles.header} body-font`}>
      <div className={`${styles.container} mx-auto flex justify-around items-center p-5`}>
        <Link href="/" className={`${styles.logo} flex title-font font-medium items-center justify-start`}>
          <span className={`${styles.title} ml-3`}>Tayyab.</span>
        </Link>
        <nav className={`${styles.nav} flex flex-wrap items-center gap-3 text-base justify-center`}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/services" className={styles.navLink}>Services</Link>
          <Link href="/skills" className={styles.navLink}>My Skills</Link>
          <Link href="/projects" className={styles.navLink}>Projects</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
