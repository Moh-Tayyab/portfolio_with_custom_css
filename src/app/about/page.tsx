import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/Styling/about.module.css'; // Import the CSS file

export default function About() {
  return (
    <div id='about' className={`${styles.container} bg-black`}>
      <div>
        <Image
          src="/myProfile.png"
          alt="Hero image"
          width={400}
          height={300}
          className={`${styles.profileImage}`}
        /> 
      </div>
      <div className={`${styles.textSection}`}>
        <h1 className={`${styles.title}`}>
          About Me
        </h1>
        <h2 className={`${styles.subTitle}`}>
          Front-End Developer
        </h2>
        <p className={`${styles.description}`}>
          My name is Muhammad Tayyab, and I&apos;m a passionate web developer. I have a strong foundation in web design and development. I&apos;ve worked on various projects, including websites, web applications, and mobile apps. I am currently open to new opportunities and collaborations. Feel free to reach out if you&apos;re interested in working together or have any projects in mind.
        </p>
        <Link href="#" target='_blank'> 
          <button className={`${styles.downloadCVButton}`}>
            Download CV    
          </button>
        </Link>
      </div>
    </div>
  );
}
