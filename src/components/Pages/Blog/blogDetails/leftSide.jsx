import React, { useState, useContext } from 'react'
import Context from '../../../../useContext'
import { FaFacebook, FaTwitter, FaInstagram, FaTimes } from 'react-icons/fa'
import Comment from './comment'
import { Card } from '../../../Blocks/Blog'

export default function Left() {

    // thats a dummy date. date will be provided from the BlogData

    const date = new Date()


    const [error, setError] = useState(false)

    const [modal, setModal] = useState(false)


    const { blogDetails, Rblog } = useContext(Context)




    const [comment, setComment] = useState({
        id: '',
        userName: '',
        email: '',
        comment: '',
        image: null,
        replies: []
    })
    function handleChange(e) {
        setComment({ ...comment, [e.target.name]: e.target.value })
    }




    function handleComment() {
        let id = blogDetails.comments.length
        setComment({ ...comment, id: id + 1 })
        blogDetails.comments.push(comment)
        setComment({
            ...comment,
            id: '',
            email: '',
            comment: '',
            replies: []
        })

    }

    return (
        <div className="left">
            <div className="image">
                <img src={blogDetails.image} alt={blogDetails.title} />
                <div className="imgFooter">
                    <p>posted by {blogDetails.author} </p>
                    <p>date: {date.toDateString()} </p>
                </div>
            </div>
            <div className="content">
                <h3>{blogDetails.title} </h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias facilis in neque sit voluptas veritatis error, atque dolor illum praesentium? Voluptate atque repellat sequi, consequatur sed ut fugiat dolores. Nisi non harum officiis provident? Aliquid corporis fugit rem, asperiores laudantium quo. Doloribus beatae amet mollitia doloremque quasi odio corporis. Fuga ab quam quae. Nesciunt voluptates hic cumque at enim qui consequuntur perspiciatis iusto! Quidem, maxime at tenetur repellendus aliquid et.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum veniam dolor odio atque nisi itaque voluptates temporibus recusandae rerum architecto?</p>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae temporibus labore eum sapiente recusandae aliquid voluptatibus rerum autem ducimus impedit.</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, eius porro iusto expedita rerum incidunt possimus aut aspernatur. Ullam laboriosam exercitationem deserunt necessitatibus adipisci voluptas optio animi pariatur natus inventore nostrum veniam saepe ex quia, eaque, deleniti voluptatem omnis reprehenderit, dignissimos ad obcaecati ipsam eligendi quos! Facilis assumenda animi eos!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus eveniet laborum at modi vitae dicta numquam, debitis eum. Amet dolorem repellat ea dignissimos enim obcaecati pariatur ullam architecto, explicabo, fugit, iusto perferendis quam? Cupiditate alias ratione sed voluptatum inventore et vitae libero nam pariatur velit odit at delectus praesentium illum rerum molestiae exercitationem recusandae ab adipisci fugiat optio iusto officiis, quibusdam sapiente? Voluptatem sunt ratione temporibus, aspernatur error cumque, rerum soluta ullam ab minima totam nemo ea eos cupiditate culpa rem quibusdam reprehenderit nam harum exercitationem itaque ipsa? Quibusdam delectus provident ab, eum enim nulla rerum cumque explicabo. Eum sequi tempora necessitatibus laudantium sint facere iusto nam? Natus illum aut est ipsa! Dolorum inventore optio dolore voluptas magni iste culpa at necessitatibus sapiente, consequuntur placeat quas eum ducimus recusandae magnam cumque. Eveniet a sint minima aut soluta. Nemo labore minus iste alias possimus qui, deleniti ad earum vel, eum perferendis.</p>
            </div>
            <div className="share">
                <p>Share : </p>
                <div className="icons">
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagram />
                </div>
            </div>
            <div className="comments">
                <h3>Comments:</h3>
                {blogDetails.comments.map(item => <Comment key={item.id} value={{ item, comment, setModal }} />)}
            </div>
            <div className="commentInput">
                <h3>leave a comment:</h3>
                <div className="inputs">
                    <div className='inputGroup'>
                        <input name='userName' value={comment.userName} type="text" placeholder='Name' onChange={handleChange} />
                        <input name='email' type="email" value={comment.email} placeholder='Email' onChange={handleChange} />

                    </div>
                    <textarea name="comment" value={comment.comment} onChange={handleChange} id="" placeholder='Enter Your Comment' cols="30" rows="10"></textarea>
                </div>
                <button onClick={handleComment}>comment</button>
            </div>
            <div className={`dmmy ${modal ? 'dmmy-s' : ''}`}  onClick={() => { setModal(false) }}></div>
            <div className={`modal ${modal ? 'modal-s' : ''}`}>
                <div className="wraper">
                    <FaTimes />
                    <label htmlFor="name">Name:</label>
                    <input id='name' name='userName' value={comment.userName} type="text" onChange={handleChange} /><br />
                    <label htmlFor="image">picture (optional):</label>
                    <input type="file" name="image" id="" onChange={handleChange} />
                    <button onClick={() => { comment.userName ? setModal(false) : setError(true) }}>submit</button>
                </div>
            </div>
            <div className="rblog">
                <h3>related blog</h3>
                <div className='wraper'>
                    {Rblog.map(item => <Card key={item.id} item={item} />)}
                </div>
            </div>
        </div>

    )
}