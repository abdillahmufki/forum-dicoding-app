import React from 'react'
import styles from "./tag.module.css"


export default function CategoryTag({ label }) {

    return (
        <div className={styles.tag}>#{label}</div>
    )
}
