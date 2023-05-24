import React from 'react'
import styles from "./comment.module.css"
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa'
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi'

import moment from 'moment';
import 'moment/locale/id';
moment.locale('id')

export default function CommentItem({ data }) {
  return (
    <div className={styles.commentItem}>
      <div className={styles.header}>
        <div className={styles.ownerInfo}>
          <img src={data?.owner?.avatar} className={styles.ava} />
          <div className={styles.owner}>{data?.owner?.name}</div>
        </div>
        <div className={styles.postAt}>{moment(data?.createdAt).fromNow()}</div>
      </div>
      {/* <p>{data?.content}</p> */}
      <p
        dangerouslySetInnerHTML={{ __html: data?.content }}
      ></p>
      <div className={styles.footer}>
        <div className={styles.upVote}>
          <span>
            <FiThumbsUp />
          </span>
          <span>3</span>
        </div>
        <div className={styles.downVote}>
          <span>
            <FiThumbsDown />
          </span>
          <span>3</span>
        </div>
      </div>

    </div>
  )
}
