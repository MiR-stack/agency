const Blog = require('../model/blog.model')
const User = require('../model/users.model')


// get blogs

 function handleBlogs(req,res){

    const _id = req.query.id

    if(_id){
         Blog.findById(_id)
         .then(response => res.send(response))
         .catch(err => res.send(err))
    }else{
        Blog.find()
        .then(response => res.send(response))
        .catch(err => res.send(err))
    }

 }

// create blog 

function createBlog(req,res){
    const blog = req.body

    const newBlog = new Blog(blog)

    newBlog.save()
    .then(response => res.send(response))
    .catch(err => res.send(err))
}

//add comment

async function addComment(req,res){
    const userId = req.query.user
    const blogId = req.query.blog
  

    const user = await User.findById(userId)
    const blog = await Blog.findById(blogId)


    const newComment = {
        userName:user.name,
        image:user.image,
        comment:req.body.comment,
    }

    blog.comments.push(newComment)

    blog.save()
    .then(response => res.send(response))
    .catch(err => res.send(err))


}


//add new reply

async function reply(req,res){
    const userId = req.query.user
    const blogId = req.query.blog
    const commentId = req.query.comment
    
    const user = await User.findById(userId)
    const blog = await Blog.findById(blogId)
    const comment = blog.comments.id(commentId)
    
    const newReply = {
        userName:user.name,
        image:user.image,
        reply:req.body.reply
    }

    comment.replies.push(newReply)

    blog.save()
    .then(response => res.send(response))
    .catch(err => res.send(err))


}



//deleting blog

function deletBlog(req,res){
    const _id = req.query.id

    Blog.findByIdAndDelete(_id)
    .then(()=>res.send('deleted successfully'))
    .catch(err => res.send(err))
}

// delete comment

async function deletComment(req,res){
    const blogId = req.query.blog
    const commentId = req.query.comment


    const blog = await Blog.findById(blogId)
   blog.comments.pull(commentId)

   blog.save((err) =>{
       if(err) return handleError(err)
       
       res.send('commnet deleted')
   })
  

    
}


//delet reply

async function deletReply(req,res){
    try{
        const blogId = req.query.blog
    const commentId = req.query.comment
    const replyId = req.query.reply

    const blog = await Blog.findById(blogId)

    blog.comments.id(commentId).replies.pull(replyId)

    

    blog.save((err)=>{
        if(err) return handleError(err)

        res.send('reply deleted')
    })
    }catch(err){
        res.send(err)
    }

}


//updating section start here

//update blog

async function updateBlog(req,res){
  try{
    const _id = req.query.id
    const blog = await Blog.findByIdAndUpdate({_id},{$set:req.body})
    res.send(blog)
  }catch(err){
      res.send(err)
  }

}

//update comment

async function updateComment(req,res){
    const blogId = req.query.blog
    const commentId = req.query.comment

    const blog = await Blog.findById(blogId)
    const Comment = blog.comments.id(commentId)
    Comment.comment = req.body.comment

    blog.save((err)=>{
        if(err) return handleError(err)

        res.send('saved successfull')
    })
}


//update reply

async function updateReply(req,res){
    const blogId = req.query.blog
    const commentId = req.query.comment
    const replyId = req.query.reply

    const blog = await Blog.findById(blogId)
    const Reply = blog.comments.id(commentId).replies.id(replyId)
    Reply.reply = req.body.reply

    blog.save((err)=>{
        if(err) return console.log(err)

        res.send('reply updated')
    })
}



module.exports = {handleBlogs,createBlog,addComment,reply,deletBlog,deletComment,deletReply,updateBlog,updateComment,updateReply}