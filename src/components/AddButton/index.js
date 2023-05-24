import React from 'react'
import { FaPlus } from 'react-icons/fa'
import styles from './add.module.css'
import { useNavigate } from 'react-router-dom'

export default function AddButton() {
    const navigate = useNavigate();
    return (
        <div className={styles.add}
            onClick={() => navigate('/add')}
        >
            <FaPlus />
        </div>
    )
}
