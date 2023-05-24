import { useState } from 'react';
import styles from './votes.module.css';
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

function VotesComment({ like, onClickLike, onNetralLike, dislike, onClickDislike, onNetralDislike }) {
    const [votesUp, setVotesUp] = useState(false);
    const handleVotesUp = () => {
        setVotesUp(!votesUp);
    };

    const [votesDown, setVotesDown] = useState(false);
    const handleVotesDown = () => {
        setVotesDown(!votesDown);
    };

    return (
        <>
            <div className={styles.thread_upvote}>
                <div className='pointer' >
                    {
                        like ? <AiFillLike onClick={onNetralLike} /> : <AiOutlineLike onClick={onClickLike} />
                    }
                </div>
                <div>1</div>
            </div>
            <div className={styles.thread_downvote}>
                <div className='pointer' >
                    {
                        dislike ? <AiFillDislike onClick={onNetralDislike} /> : <AiOutlineDislike onClick={onClickDislike} />
                    }
                </div>
                <div>2</div>
            </div>
        </>
    )
}

export default VotesComment