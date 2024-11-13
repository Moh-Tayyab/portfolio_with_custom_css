import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/projects';
import styles from '@/Styling/Project.module.css';

export default function Project() {
  return (
    <div id='project' className={styles.projectContainer}>
      <h2 className={styles.heading}>
        Our <span className={styles.highlight}>Project</span>
      </h2>
      <div className={styles.projectGrid}>
        {projects.slice(0, 3).map((project, index) => (
          <div key={index} className={styles.projectCard}>
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                width={900}
                height={700}
                className={styles.projectImage}
              />
            )}
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <Link href="https://governor-sindh-website-clone-xyz.vercel.app/" target="_blank">
              <button className={styles.readMoreButton}>Read More</button>
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.projectGrid}>
        {projects.slice(3, 6).map((project, index) => (
          <div key={index} className={styles.projectCard}>
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                width={900}
                height={700}
                className={styles.projectImage}
              />
            )}
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <button className={styles.readMoreButton}>Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}
