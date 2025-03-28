// src/components/Projects/components/project/ProjectText.jsx
'use client';
import React from 'react'
import styles from './style.module.scss';

export default function ProjectText({index, title,  manageModal}) {

    return (
        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX,  e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={styles.project}>
            <h2>{title}</h2>
            <p>Design & Development</p>
        </div>
    )
}
