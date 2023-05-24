
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Layout2 from '../../components/Layout/Layout2';
import { useGetThreadQuery } from '../../states/features/threads';
import CategoryTag from '../../components/CategoryTag';
import parse from "html-react-parser";
import CommentItem from '../../components/CommentItem';
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi';
import moment from 'moment';
import 'moment/locale/id';
import { useAddCommentMutation } from '../../states/features/comments';
import { useAuthContext } from '../../context/auth';
import { useGlobalContext } from '../../context';
import { VotesThread } from '../../components/Votes';

moment.locale('id')


export default function Threads() {

    // 
    const { user } = useAuthContext();

    const { id } = useParams();
    const getThread = useGetThreadQuery(id);
    const [addComment, { data, isLoading, isSuccess, isError, error }] = useAddCommentMutation();
    const {
        id: idThread,
        title,
        body,
        category,
        comments,
        createdAt,
        owner,
        upVotesBy,
        downVotesBy
    } = getThread?.data?.data?.detailThread ?? {};

    const [commentBody, setCommentBody] = useState("");

    const handleOnInputComment = (event) => {
        const { target: { innerHTML } } = event;
        // const parsed = parse(innerHTML);
        setCommentBody(innerHTML.toString());
    }

    const postComment = (event) => {
        event.preventDefault();
        const data = {
            content: commentBody
        }
        if (commentBody !== "") {
            addComment({
                threadId: idThread,
                comment: data
            });
        } else {
            alert('Content tidak boleh kosong !')
        }
    }


    return (
        <Layout2>
            <section>
                <CategoryTag label={category} />
                <div className='thread_title'>{title}</div>
                <div className='thread_body'
                    dangerouslySetInnerHTML={{ __html: body }}
                ></div>
                <div className='thread_footer'>
                    <VotesThread idThread={idThread} />
                    <div className='owner-info'>
                        <span>Dibuat oleh </span>
                        <img src={owner?.avatar} className="ava" />
                        <span>{owner?.name}</span>
                    </div>
                    <div className='postAt'>{moment(createdAt).fromNow()}</div>
                </div>

                <div className='thread_comment'>
                    {
                        user ?
                            <div className='thread_comment_input'>
                                <h3>Beri Komentar</h3>
                                <form onSubmit={postComment} className='comment-input'>
                                    <div
                                        className="add-comment"
                                        data-placeholder=""
                                        contentEditable
                                        onInput={handleOnInputComment}
                                    />
                                    <button type='submit'>Kirim</button>
                                </form>
                            </div>
                            :
                            <div style={{ marginTop: 30 }}>
                                <Link to="/login">login</Link>
                                <span> untuk memberi komentar</span>
                            </div>
                    }

                    <div className='thread_comment_list'>
                        <h3>Komentar (1)</h3>
                        <div className='comments_list'>
                            {
                                comments?.map((comment, index) =>
                                    <CommentItem key={index} data={comment} />
                                )
                            }
                        </div>
                    </div>

                </div>
            </section>
        </Layout2>
    )
}


