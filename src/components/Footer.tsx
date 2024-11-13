import React from 'react';
import styles from '../Styling/Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footerBodyFont}>
        <div className={styles.footerContent}>
          <Link
            href="#"
            className={styles.footerTitle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className={styles.logoIcon}
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className={styles.titleText}>
              Tayyab
            </span>
          </Link>
          <p className={styles.footerCopyright}>
            © {new Date().getFullYear()} Tayyab —
            <Link
              href="/contact"
              className={styles.emailLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              @m.tayyab1263@gmail.com
            </Link>
          </p>
          <span className={styles.socialLinks}>
            <Link
              href="https://www.facebook.com/profile.php?id=100061613885111"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Facebook Icon */}
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className={styles.socialIcon}
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </Link>
            <Link
              href="https://www.twitter.com/m_tayyab3366"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Twitter Icon */}
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className={styles.socialIcon}
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/grow_wid_muhammad/"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Instagram Icon */}
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className={styles.socialIcon}
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/in/ch-muhammad-tayyab/"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* LinkedIn Icon */}
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className={styles.socialIcon}
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
