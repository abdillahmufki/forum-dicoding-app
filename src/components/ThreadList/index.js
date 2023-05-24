import React from 'react';
import styles from './threadlist.module.css';
import { Link, useNavigate } from 'react-router-dom';

// import { FaThumbsUp, FaThumbsDown, FaShare, } from 'react-icons/fa'
import { FiThumbsUp, FiThumbsDown, FiShare } from 'react-icons/fi'


function ThreadList({ data, no }) {

    const navigate = useNavigate();

    return (
        <div className={styles.threads}>
            {/* <h3>{no}.</h3> */}
            <div className={styles.category}>#{data.category}</div>
            <div className={styles.title} onClick={() => navigate(`/threads/${data.id}`)}>
                <Link to="/">
                    {data.title}
                </Link>
            </div>
            <div className={styles.body}
                dangerouslySetInnerHTML={{ __html: data.body }}
            ></div>
            <div className={styles.footer}>
                <div className={`pointer ${styles.footer__item}`}>
                    <FiThumbsUp />
                    <div>0</div>
                </div>
                <div className={`pointer ${styles.footer__item}`}>
                    <FiThumbsDown />
                    <div>0</div>
                </div>
                <div className={styles.footer__item}>
                    <FiShare />
                    <div>1</div>
                </div>
                <div>23 menit yang lalu</div>
                <div>Dibuat oleh <strong>Coder</strong></div>
            </div>
        </div>
    )
}

export default ThreadList