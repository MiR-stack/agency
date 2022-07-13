import React, { useState, useEffect, useContext } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import Context from '../../../../useContext'

function Reply({ item }) {
    return (
        <div className="reply">
            <div className="img">
                {item.image ? <img src={item.image} alt={item.userName} /> : <FaUserAlt />}
            </div>
            <div className='container'>
                <p><strong>{item.userName} </strong>{item.rieply} </p>
            </div>
        </div>
    )
}



export default function Comment({ value }) {

    const { blogDetails } = useContext(Context)

    const { item, comment, setModal } = value
    const { userName, image } = comment
    const [error, setError] = useState(false)
    const [replies, setReplies] = useState({ rieply: '', })

    function handleReply(id, reply) {
        let commentReply = blogDetails.comments.find(item => item.id === id)
        commentReply.replies.push(reply)
    }


    useEffect(() => {
        setReplies((item) =>{return { ...item, userName, image }})
    }, [userName, image])

    function handleSubmit() {
        if (replies.rieply) {
            setError(false)

            if (replies.userName) {
                handleReply(item.id, replies)
                setReplies({ ...replies, rieply: '' })
            } else {
                setModal(true)
            }
        } else {
            setError(true)
        }
    }



    return (
        <div className="comment">
            <div className="wraper">
                <div className="fComment">
                    <div className="img">
                        {item.image ? <img src={item.image} alt={item.userName} /> : <FaUserAlt />}
                    </div>
                    <div className='container'>
                        <p><strong>{item.userName} </strong>{item.comment} </p>
                    </div>
                </div>
                <div className="replies">
                    {item.replies.map((item, index) => <Reply key={index} item={item} />)}
                </div>
            </div>
            <div className="Reply">
                <div className="btn-group">
                    <input className={error?replies.rieply?null:'error':null} type="text" name='rieply' value={replies.rieply} placeholder='Write something...' onChange={(e) => { setReplies({ ...replies, rieply: e.target.value }) }} />
                    <button onClick={handleSubmit} >reply</button>
                </div>
            </div>
        </div>
    )
}