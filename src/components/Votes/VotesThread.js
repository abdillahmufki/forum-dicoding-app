import { useEffect, useState } from 'react';
import styles from './votes.module.css';
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { useDownVoteThreadMutation, useNeutralizeVoteThreadMutation, useUpVoteThreadMutation } from '../../states/features/votes';
import { useGetThreadQuery } from '../../states/features/threads';
import { useGetMyProfileQuery } from '../../states/features/users';

function VotesThread({
    idThread
    // like, onClickLike, onNetralLike, dislike, onClickDislike, onNetralDislike 
}) {

    // detail thread - jumlah votes
    const getThread = useGetThreadQuery(idThread);
    const {
        upVotesBy,
        downVotesBy
    } = getThread?.data?.data?.detailThread ?? {};

    const refetchThread = getThread.refetch;

    useEffect(() => {
        console.log("fetch votes...")
    }, [refetchThread])

    console.log('getThread', getThread)

    // profile
    const myProfile = useGetMyProfileQuery();
    const {
        id: myProfileId
    } = myProfile?.data?.data?.user ?? {};
    console.log('myProfile', myProfile)
    console.log('myProfileID', myProfileId)

    // check votes
    const checkUpVotesId = upVotesBy?.includes(myProfileId);
    const checkDownVotesId = downVotesBy?.includes(myProfileId);

    // votes
    const [like, likeResult] = useUpVoteThreadMutation();
    const [dislike, dislikeResult] = useDownVoteThreadMutation();
    const [netralLike, netralResult] = useNeutralizeVoteThreadMutation();

    const handleVotesUp = async () => {
        const res = await like(idThread);
        console.log('like thread', res);
        console.log('likeResult', likeResult);
        refetchThread();
    };

    const handleVotesDown = async () => {
        const res = await dislike(idThread);
        console.log('dislike thread', res);
        console.log('dislikeResult', dislikeResult);
        refetchThread();
    };

    const handleNetralVotes = async () => {
        const res = await netralLike(idThread);
        console.log('netralLike thread', res);
        console.log('netralResult', netralResult);
        refetchThread();
    };

    return (
        <>
            <div className={styles.thread_upvote}>
                <div className='pointer' >
                    {
                        checkUpVotesId ? <AiFillLike onClick={handleNetralVotes} /> : <AiOutlineLike onClick={handleVotesUp} />
                    }
                </div>
                <div>{upVotesBy?.length}</div>
            </div>
            <div className={styles.thread_downvote}>
                <div className='pointer' >
                    {
                        checkDownVotesId ? <AiFillDislike onClick={handleNetralVotes} /> : <AiOutlineDislike onClick={handleVotesDown} />
                    }
                </div>
                <div>{downVotesBy?.length}</div>
            </div>
        </>
    )
}

export default VotesThread